from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import os
# Create your views here.

def index(request):
    return HttpResponse("敏感词检测系统1.0")

def detective(request):
    return render(request, 'decective.html')

@csrf_exempt
def handle_Ajax(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        # print(os.listdir())
        with open('GCDetection/static/com.txt', 'r', encoding='utf-8') as f:
            info = f.read()
        info = [x for x in info.split('\n') if x]
        for i in info:
            if title.find(i) > 0:
                return HttpResponse('no')
        # print(request.POST)
        print(title)
    return HttpResponse("ok")
