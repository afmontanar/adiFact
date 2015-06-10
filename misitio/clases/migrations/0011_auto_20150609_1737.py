# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0010_auto_20150528_0119'),
    ]

    operations = [
        migrations.CreateModel(
            name='Articulo',
            fields=[
                ('Codigo', models.CharField(max_length=30, serialize=False, primary_key=True)),
                ('Nombre', models.CharField(max_length=200)),
                ('TipoCodigo', models.CharField(max_length=1)),
                ('TipoInventario', models.CharField(max_length=1)),
                ('CodigoPlu', models.CharField(max_length=30)),
                ('NombrePlu', models.CharField(max_length=30)),
                ('GrupoLinea', models.CharField(max_length=30)),
                ('Localizacion', models.CharField(max_length=30)),
                ('ExistenciaMax', models.CharField(max_length=30)),
                ('Referecia', models.CharField(max_length=30)),
                ('Dependencia', models.CharField(max_length=30)),
                ('ExistenciaMin', models.CharField(max_length=30)),
                ('DescripcionApida', models.CharField(max_length=30)),
                ('CtaInventario', models.CharField(max_length=30)),
                ('UltimoCosto', models.CharField(max_length=30)),
                ('Estado', models.CharField(max_length=30)),
                ('CtaIngresos', models.CharField(max_length=30)),
                ('Fletes', models.CharField(max_length=30)),
                ('IvaVentas', models.CharField(max_length=30)),
                ('CostoVenta', models.CharField(max_length=30)),
                ('CostoBase', models.CharField(max_length=30)),
                ('Tipoarticulo', models.CharField(max_length=30)),
                ('InterfaceCon', models.CharField(max_length=30)),
                ('PrecioVent1', models.CharField(max_length=30)),
                ('TipoEmpaque', models.CharField(max_length=30)),
                ('PrecioVent2', models.CharField(max_length=30)),
                ('UnidadeXempaque', models.CharField(max_length=30)),
                ('PrecioVent3', models.CharField(max_length=30)),
                ('PorIva', models.CharField(max_length=30)),
                ('DtoFacturacion', models.CharField(max_length=30)),
                ('FechaEntrada', models.CharField(max_length=30)),
                ('Lote', models.CharField(max_length=30)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='chofer',
            name='cliente',
        ),
        migrations.RemoveField(
            model_name='detallehistoriavehiculo',
            name='codhistori',
        ),
        migrations.DeleteModel(
            name='DetalleHistoriaVehiculo',
        ),
        migrations.RemoveField(
            model_name='historiavehiculo',
            name='chofer',
        ),
        migrations.DeleteModel(
            name='Chofer',
        ),
        migrations.RemoveField(
            model_name='historiavehiculo',
            name='cliente',
        ),
        migrations.DeleteModel(
            name='Cliente',
        ),
        migrations.DeleteModel(
            name='HistoriaVehiculo',
        ),
    ]
