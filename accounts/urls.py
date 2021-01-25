from django.urls import path, include

from .views import SignUpView, VerificationCodeView, SendVerificationCode

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('verification/', VerificationCodeView.as_view(), name='verification'),
    path('resend_code/',SendVerificationCode.as_view(), name='resend-code'),
    path('', include('django.contrib.auth.urls')),
]