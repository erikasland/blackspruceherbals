from django.conf.urls import url
from views import Landing, About, Shop, Contact, Essence, Session, SendEmail

urlpatterns = [
url(r'^your-session$', Session.as_view()),
	url(r'^emailemma$', SendEmail.as_view()),
	url(r'^essence$', Essence.as_view()),
	url(r'^contact$', Contact.as_view()),
	url(r'^shop$', Shop.as_view()),
	url(r'^about$', About.as_view()),
    url(r'^$', Landing.as_view()),
]
