from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    text = models.CharField(max_length=500)
    is_done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="todos", on_delete=models.CASCADE, null=True)
