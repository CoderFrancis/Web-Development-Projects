from django.db import models


# Create your models here.
# Student_Category
# Professors_Category
class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    # Later, you might add more fields, like:
    # professor = models.ForeignKey(Professor, on_delete=models.SET_NULL, null=True)
    # start_date = models.DateField()
    # end_date = models.DateField()


class Student(models.Model):
    name = models.CharField(max_length=200)
    race = models.CharField(max_length=100)  # Human, AI, E.T., etc.
    age = models.PositiveIntegerField()
    email = models.EmailField(unique=True)  # Adding an email field for contact
    enrollment_date = models.DateField()  # The date when the student enrolled

    # Optional fields
    major = models.CharField(max_length=200, blank=True)
    # gpa = models.DecimalField(max_length=3, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name


class Professor(models.Model):
    name = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    research_interests = models.TextField(blank=True)  # Optional, can be a long text
    join_date = models.DateField()

    # You might also want to include fields for:
    # - Office hours
    # - office_number = models.CharField(max_length=20, blank=True)
    # - Personal website or LinkedIn profile
    # - Photo (consider using models.ImageField, requires Pillow library)
    # - List of courses taught (this might be a ManyToManyField if set up with a Course model)

    def __str__(self):
        return self.name
