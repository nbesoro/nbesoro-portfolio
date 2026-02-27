from django.urls import path, include
from rest_framework import routers
from api.views import (
    PersonnalViewSet,
    ExperienceViewSet,
    FormationViewSet,
    ProjetViewSet,
    TechnologyViewSet,
    CategoryViewSet,
)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r"info", PersonnalViewSet)
router.register(r"experiences", ExperienceViewSet)
router.register(r"formations", FormationViewSet)
router.register(r"projects", ProjetViewSet)
router.register(r"technologies", TechnologyViewSet)
router.register(r"categories", CategoryViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
]
