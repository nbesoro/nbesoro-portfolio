from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin

from django.contrib import admin
from api.models import *

# Register your models here.


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    """Admin View for Technology"""

    list_display = ("title", "category", "is_top")
    list_filter = ("category", "is_top")
    search_fields = ("title",)
    ordering = ("-is_top", "category")


@admin.register(Work)
class WorkAdmin(admin.ModelAdmin, DynamicArrayMixin):
    """Admin View for Work"""

    list_display = ("title", "experience")
    list_filter = ("experience",)
    filter_horizontal = ("technologies",)
    search_fields = ("title",)


@admin.register(Formation)
class FormationAdmin(admin.ModelAdmin, DynamicArrayMixin):
    """FormationAdmin View for"""

    list_display = ("school", "diploma", "year")
    search_fields = ("school",)
    date_hierarchy = "year"
    ordering = ("-year",)


@admin.register(Projet)
class ProjetAdmin(admin.ModelAdmin):
    """Admin View for"""

    list_display = ("title", "slug", "linkedin", "github", "gitlab")
    search_fields = ("title",)
    filter_horizontal = ("technologies",)


admin.site.register(Personnal)
admin.site.register(Experience)
admin.site.register(Category)
