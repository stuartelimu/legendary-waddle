from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(
        max_length=255,
    )
    telephone = forms.CharField(max_length=13)

    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'telephone', 'email', 'password1', 'password2']


class CustomUserVerificationCodeForm(forms.Form):
    code = forms.IntegerField()