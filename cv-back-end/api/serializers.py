from rest_framework import serializers

from api.models import (
    Personnal,
    Experience,
    Category,
    Technology,
    Work,
    Formation,
    Projet,
)


class CategorySerializer(serializers.ModelSerializer):
    class EmbeddedTechnoSerializer(serializers.ModelSerializer):
        class Meta:
            model = Technology
            exclude = ["id", "category"]

    technologies = EmbeddedTechnoSerializer(many=True, source="technology_set")

    class Meta:
        model = Category
        exclude = ["id"]


class TechnologySerializer(serializers.ModelSerializer):
    class EmbeddedCategorySerializer(serializers.ModelSerializer):
        class Meta:
            model = Category
            exclude = ["id"]

    category = EmbeddedCategorySerializer()

    class Meta:
        model = Technology
        exclude = ["id", "is_top"]


class PersonnalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personnal
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):
    class EmbeddedWorkSerializer(serializers.ModelSerializer):
        technologies = TechnologySerializer(many=True)

        class Meta:
            model = Work
            exclude = ["id", "experience"]

    works = EmbeddedWorkSerializer(many=True, source="work_set")

    class Meta:
        model = Experience
        exclude = ["id"]


class FormationSerializer(serializers.ModelSerializer):
    year = serializers.SerializerMethodField()

    def get_year(self, obj):
        return obj.year.year

    class Meta:
        model = Formation
        exclude = ["id"]


class ProjetSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True)

    class Meta:
        model = Projet
        exclude = ["id"]
        lookup_field = "slug"
