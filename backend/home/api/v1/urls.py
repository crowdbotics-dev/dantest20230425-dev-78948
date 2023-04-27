from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GatosViewSet,PersonasViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('gatos', GatosViewSet )
router.register('personas', PersonasViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
