# Generated by Django 3.1.2 on 2020-11-15 15:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.expressions


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.expressions.Case, related_name='leads', to=settings.AUTH_USER_MODEL),
        ),
    ]
