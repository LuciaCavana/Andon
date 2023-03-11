
GO
/****** Object:  Table [dbo].[MecanizadoLog]    Script Date: 7/3/2023 09:49:45 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[MecanizadoLog]') AND type in (N'U'))
DROP TABLE [dbo].[MecanizadoLog]
GO
/****** Object:  Table [dbo].[MecanizadoLog]    Script Date: 7/3/2023 09:49:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MecanizadoLog](
	[IdLog] [int] IDENTITY(1,1) NOT NULL,
	[Fecha_Hora] [datetime] NOT NULL,
	[Ip] [varchar](25) NOT NULL,
	[Evento] [varchar](30) NOT NULL,
	[Recurso] [varchar](20) NULL,
	[Producto] [varchar](20) NULL,
	[Operacion] [int] NULL,
	[Operario] [int] NULL,
	[Inicio_Raspberry] [datetime] NULL,
	[Fin_Raspberry] [datetime] NULL,
	[IdEvento] [int] NULL,
	[motivo] [varchar](100) NULL,
	[falla] [varchar](100) NULL,
	[fecha_motivo] [datetime] NULL,
 CONSTRAINT [PK_MecanizadoLog] PRIMARY KEY CLUSTERED 
(
	[IdLog] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
