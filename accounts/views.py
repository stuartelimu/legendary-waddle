from django.shortcuts import render
from django.views.generic import CreateView
from django.views.generic.edit import FormView
from django.views import View
from django.urls import reverse_lazy
from django.contrib.auth import authenticate, login
from django.core.mail import send_mail
from django.utils import timezone
from django.contrib import messages
from django.http import HttpResponseRedirect

from .models import CustomUser, CustomUserVerificationCode
from .forms import CustomUserCreationForm, CustomUserVerificationCodeForm


class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('verification')
    template_name = 'accounts/signup.html'

    def form_valid(self, form):
        self.email = form.cleaned_data.get('email')
        self.password = form.cleaned_data.get('password2')
        user = form.save()
        user.refresh_from_db()
        user.profile.telephone = form.cleaned_data.get('telephone')
        user.save()
        return super().form_valid(form)

    def get_success_url(self):
        user = authenticate(email=self.email, password=self.password)
        if user is not None:
            self.request.session['email'] = self.email
            self.request.session['password'] = self.password

            verification_code = CustomUserVerificationCode.objects.update_or_create(user=user)
            code = CustomUserVerificationCode.objects.get(user=user).code

            send_mail(
                'verification code',
                f'verification code {code}',
                'stuartelimu@gmail.com',
                [self.email,],
                fail_silently=False,
            )
        else:
            print('user is none')
        return super().get_success_url()


class VerificationCodeView(FormView):
    template_name = 'accounts/verification.html'
    form_class = CustomUserVerificationCodeForm
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        self.email = self.request.session.get('email')
        self.password = self.request.session.get('password')

        user = CustomUser.objects.get(email=self.email)

        time_now = timezone.now()
        time_code_sent = CustomUserVerificationCode.objects.get(user=user).date

        diff = time_now - time_code_sent

        if diff.days == 0 and diff.seconds < 45:
            verification_code = form.cleaned_data.get('code')
            code = CustomUserVerificationCode.objects.get(user=user).code

            if verification_code == code:
                auth_user = authenticate(email=self.email, password=self.password)
                if auth_user is not None:
                    login(self.request, auth_user)

            else:
                messages.warning(self.request, 'Invalid Code')
                return self.render_to_response(self.get_context_data(form=form))
        else:
            messages.warning(self.request, 'Code Expired. Get another Code')
            CustomUserVerificationCode.objects.get(user=user).delete()
            return self.render_to_response(self.get_context_data(form=form))

        return super().form_valid(form)


class SendVerificationCode(View):

    template_name = 'accounts/verification.html'

    def get(self, request, *args, **kwargs):
        self.email = self.request.session['email']
        self.password =self.request.session['password']

        user = authenticate(email=self.email, password=self.password)

        if user is not None:

            # delete previous code sent 
            # CustomUserVerificationCode.objects.get(user=user).delete()

            # create new code
            verification_code = CustomUserVerificationCode.objects.update_or_create(user=user)
            code = CustomUserVerificationCode.objects.get(user=user).code

            send_mail(
                'verification code',
                f'verification code {code}',
                'admin@access.com',
                [self.email,],
                fail_silently=False,
            )
            messages.success(self.request, 'We sent you a verification code')

        else:
            messages.warning(self.request, 'We couldn"t find that user. Please try again')

        return HttpResponseRedirect('/accounts/verification/')
    
