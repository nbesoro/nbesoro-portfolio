from django_better_admin_arrayfield.models.fields import ArrayField
from django.db import models
from autoslug import AutoSlugField


class Personnal(models.Model):
    """Model definition for Personnal."""

    job = models.CharField(max_length=255)
    technologies = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    bio = models.TextField()
    cv = models.FileField(upload_to="cv/personal/")
    linkedin = models.URLField(max_length=200)
    github = models.URLField(max_length=200)
    gitlab = models.URLField(max_length=200)
    youtube = models.URLField(max_length=200)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)
    calendly = models.URLField(max_length=200)

    class Meta:
        """Meta definition for Personnal."""

        verbose_name = "Personnal"
        verbose_name_plural = "Personnals"

    def __str__(self):
        """Unicode representation of Personnal."""
        return self.first_name + self.job


class Experience(models.Model):
    """Model definition for Experience."""

    start = models.DateField()
    end = models.DateField(null=True, blank=True)
    ongoing = models.BooleanField(default=False)
    company = models.CharField(max_length=200)
    company_logo = models.ImageField(upload_to="cv/logo/")
    job = models.CharField(max_length=200)

    class Meta:
        """Meta definition for Experience."""

        verbose_name = "Experience"
        verbose_name_plural = "Experiences"

    def __str__(self):
        """Unicode representation of Experience."""
        return f"{self.job} : {self.company}"


class Category(models.Model):
    """Model definition for Category."""

    name = models.CharField(max_length=200)

    class Meta:
        """Meta definition for Category."""

        verbose_name = "Category"
        verbose_name_plural = "Categorys"

    def __str__(self):
        """Unicode representation of Category."""
        return self.name


class Technology(models.Model):
    """Model definition for techno."""

    title = models.CharField(max_length=200)
    logo = models.FileField(upload_to="cv/techno/", null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    is_top = models.BooleanField(default=False)

    class Meta:
        """Meta definition for techno."""

        verbose_name = "Technology"
        verbose_name_plural = "Technologies"

    def __str__(self):
        """Unicode representation of Technology."""
        return self.title


class Work(models.Model):
    """Model definition for Company Work."""

    title = models.CharField(max_length=200, blank=True, null=True)
    task = ArrayField(
        models.CharField(max_length=250),
    )
    technologies = models.ManyToManyField(Technology)
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE)

    class Meta:
        """Meta definition for Company Work."""

        verbose_name = "Company Work"
        verbose_name_plural = "Company Works"

    def __str__(self):
        """Unicode representation of Company Work."""
        return self.title


class Formation(models.Model):
    """Model definition for Formation."""

    year = models.DateField()
    school = models.CharField(max_length=200)
    diploma = models.CharField(max_length=250)
    learned = ArrayField(
        models.CharField(max_length=250, blank=True),
    )

    class Meta:
        """Meta definition for Formation."""

        verbose_name = "Formation"
        verbose_name_plural = "Formations"

    def __str__(self):
        """Unicode representation of Formation."""
        return self.diploma


class Projet(models.Model):
    """Model definition for Projet."""

    title = models.CharField(max_length=200)
    slug = AutoSlugField(populate_from="title", unique=True, null=True, blank=True)
    summary = models.TextField()
    description = models.TextField()
    image = models.ImageField(upload_to="cv/projet/")
    banner = models.ImageField(upload_to="cv/projet/")
    feature_video = models.URLField(max_length=250, null=True, blank=True)
    feature_img = models.ImageField(upload_to="cv/projet/", null=True, blank=True)

    linkedin = models.URLField(max_length=200, null=True, blank=True)
    github = models.URLField(max_length=200, null=True, blank=True)
    gitlab = models.URLField(max_length=200, null=True, blank=True)
    youtube = models.URLField(max_length=200, null=True, blank=True)
    website = models.URLField(max_length=200, null=True, blank=True)
    technologies = models.ManyToManyField(Technology)

    class Meta:
        """Meta definition for Projet."""

        verbose_name = "Projet"
        verbose_name_plural = "Projets"

    def __str__(self):
        """Unicode representation of Projet."""
        return self.title
