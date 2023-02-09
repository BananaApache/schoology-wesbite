from django.shortcuts import render, redirect

# Create your views here.


def home(request):
    return render(request, "home.html")


def send_to_home(request):
    return redirect(home)
