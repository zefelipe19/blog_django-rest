from django.shortcuts import render


def index(request):
    req = request
    context = {
        'req': req
    }
    for i in req:
        print(i)
    return render(request, 'index.html', context)
