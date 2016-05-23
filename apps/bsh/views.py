from django.shortcuts import render, redirect
from django.views.generic import View

class Landing(View):
	def get(self, request):
		return render(request, 'bsh/home.html')

class About(View):
	def get(self, request):
		return render(request, 'bsh/about.html')

class Shop(View):
	def get(self, request):
		return render(request, 'bsh/shop.html')

class Contact(View):
	def get(self, request):
		return render(request, 'bsh/contact.html')

class Essence(View):
	def get(self, request):
		return render(request, 'bsh/essences.html')

class Session(View):
	def get(self, request):
		return render(request, 'bsh/session.html')