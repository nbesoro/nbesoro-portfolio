from django.shortcuts import render
from rest_framework import viewsets

from api.models import (
    Personnal,
    Experience,
    Category,
    Technology,
    Work,
    Formation,
    Projet,
)


from api.serializers import (
    PersonnalSerializer,
    ExperienceSerializer,
    FormationSerializer,
    ProjetSerializer,
    TechnologySerializer,
    CategorySerializer,
)


# ViewSets define the view behavior.
class PersonnalViewSet(viewsets.ModelViewSet):
    queryset = Personnal.objects.all()
    serializer_class = PersonnalSerializer
    http_method_names = (
        "get",
        "options",
    )


class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.select_related("category").filter(is_top=True)
    serializer_class = TechnologySerializer
    http_method_names = (
        "get",
        "options",
    )


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.prefetch_related("technology_set").all()
    serializer_class = CategorySerializer
    http_method_names = (
        "get",
        "options",
    )


class FormationViewSet(viewsets.ModelViewSet):
    queryset = Formation.objects.all().order_by("-year")
    serializer_class = FormationSerializer
    http_method_names = (
        "get",
        "options",
    )


class ProjetViewSet(viewsets.ModelViewSet):
    queryset = Projet.objects.prefetch_related(
        "technologies",
        "technologies__category",
    ).all()
    serializer_class = ProjetSerializer
    http_method_names = (
        "get",
        "options",
    )
    lookup_field = "slug"


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = (
        Experience.objects.prefetch_related(
            "work_set",
            "work_set__technologies",
            "work_set__technologies__category",
        )
        .all()
        .order_by(
            "-start",
        )
    )
    serializer_class = ExperienceSerializer
    http_method_names = (
        "get",
        "options",
    )
