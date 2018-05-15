from django.db import models


class UploadedFile(models.Model):

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='uploads/%Y/%m/%d/')

    def __str__(self):
        return self.name
