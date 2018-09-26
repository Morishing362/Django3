from django.contrib import admin
from .models import Item


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    pass

from .models import Words

@admin.register(Words)
class Words(admin.ModelAdmin):
    pass