USE [Mecanizado]
GO
/****** Object:  Table [dbo].[Eventos]    Script Date: 7/3/2023 09:58:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Eventos](
	[Id_Evento] [int] IDENTITY(1,1) NOT NULL,
	[Evento] [varchar](30) NOT NULL,
	[Descripcion] [varchar](100) NULL,
	[Tipo_Evento] [varchar](30) NULL,
 CONSTRAINT [PK_Eventos] PRIMARY KEY CLUSTERED 
(
	[Evento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Eventos] ON 

INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (2, N'COMMAND_OK', N'Comando ok', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (1, N'CYCLE_END', N'Fin de ciclo', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (3, N'CYCLE_START ', N'Inicio de ciclo', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (20, N'FALLA DE SERVICIOS', N'FALLAS EN SUMINISTRO DE ELECTRICIDAD,AIRE COMPRIMIDO,ILUMINACION ', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (21, N'FALLO DE MAQUINA ', N'ERROR DE PROGRAMACIÓN; MODIFICACIÓN DE PIEZA; FALTA SOLUBLE;', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (22, N'FALTA DE HERRAMENTAL', N'HERRAMIENTA ROTA; AJUSTES INCORRECTOS; NO HAY INSERTO', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (23, N'FALTA DE MATERIA PRIMA', N'MATERIA PRIMA NO CONFORME/MATERIA PRIMA FALTANTE A PIE DE MAQUINA ', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (24, N'FALTA/CAMBIO DE OPERARIO', N'EL OPERARIO SE RETIRA O CAMBIA DE MAQUINA.', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (25, N'FALTANTES EN LINEA', N'', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (12, N'MACHINE_ANOTHERMISSING', N'Otros faltantes', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (9, N'MACHINE_DISABLE', N'Máquina desabilitada', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (13, N'MACHINE_ENABLE ', N'Máquina habilitada', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (8, N'MACHINE_FAILURE', N'Fallo de máquina', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (11, N'MACHINE_MAINTENANCE', N'Mantenimiento', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (14, N'MACHINE_RAWMATERIALMISSING', N'Falta de materia prima', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (26, N'MACHINE_READY', N'Máquina habilitada', N'')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (27, N'MACHINE_SETUP', N'Setup', N'')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (15, N'MACHINE_TOOLMISSING', N'Falta de herramental', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (16, N'MACHREADY', N'Máquina habilitada', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (10, N'MACHSETUP ', N'Setup', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (17, N'MANTENIMIENTO CORRECTIVO', N'SE REALIZA MANTENIMIENTO POR UNA FALLA DE LA MAQUINA.', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (18, N'MANTENIMIENTO PREVENTIVO', N'SE REALIZA EL PLAN DE MANTENIMIENTO PROGRAMADO.', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (7, N'PARTOPREG_OK', N'Programa Leido correctamente', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (19, N'PRODUCCION NO CONFORME', N'FALLOS DE CALIDAD NO ADMISIBLES', N'Parada')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (4, N'SCAN', N'Leido', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (5, N'SYS_READY ', N'Sistema Listo', N'Activo')
INSERT [dbo].[Eventos] ([Id_Evento], [Evento], [Descripcion], [Tipo_Evento]) VALUES (6, N'SYS_START ', N'inicio de sistema', N'Activo')
SET IDENTITY_INSERT [dbo].[Eventos] OFF
GO
