from django.shortcuts import render
from .models import Student, Professor


def student_list(request):
    students = Student.objects.all()  # Retrieve all students from the database
    return render(request, 'education/student_list.html', {'students': students})


def professor_list(request):
    professors = Professor.objects.all()  # Retrieve all professors from the database
    return render(request, 'education/professor_list.html', {'professors': professors})
