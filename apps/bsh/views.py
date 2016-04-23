from django.shortcuts import render, redirect
from django.views.generic import View

class Landing(View):
	def get(self, request):
		return render(request, 'bsh/index.html')