# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'nature/index.html')

def analytics(request):
    return render(request, 'nature/climate_data.html')

def game(request):
    return render(request, 'nature/sample_game.html')

