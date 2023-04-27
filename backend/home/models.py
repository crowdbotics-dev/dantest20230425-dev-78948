from django.conf import settings
from django.db import models
class Gatos(models.Model):
    'Generated Model'
    gid = models.BigIntegerField()
    nombre = models.TextField()
class Personas(models.Model):
    'Generated Model'
    aid = models.BigIntegerField(blank=True,)
    nombre = models.TextField(blank=True,)
    gatoid = models.ForeignKey("home.Gatos",null=True,blank=True,on_delete=models.CASCADE,related_name="personas_gatoid",)
