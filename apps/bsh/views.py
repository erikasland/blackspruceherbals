from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.views.generic import View
from secrets import password
import smtplib

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

class SendEmail(View):
	def post(self, request):
		# All of the contact info for the sender
		name = request.POST['name']
		email = request.POST['email']
		phone = request.POST['telephone']
		info = "NAME: %s \nEMAIL: %s \nPHONE %s \nMESSAGE: %s" % (name, email, phone, request.POST['message'])
		subject = "Emma, %s wants to connect with you" % (name)
		# Format the e-mail to have a subject 
		content = 'Subject: %s\n\n%s' % (subject, info)

		#Start smtplib, login, and send mail
		server = smtplib.SMTP('smtp.gmail.com', 587)
		server.ehlo()
		server.starttls()
		server.login('bshmaildelivery@gmail.com', password)
		server.sendmail('bshmaildelivery@gmail.com', 'emma@blackspruceherbals.com', content)
		server.close
		return redirect("/contact")