
insert into MecanizadoLog(Fecha_Hora, Ip,Evento,Recurso,Producto,Operacion,Operario,Inicio_Raspberry,Fin_Raspberry)
VALUES ('2022-11-15T07:28:50','192.168.24.50:57724:','CYCLE_END','ME853','91138',20,1709,'2021-10-26T10:29:47.946','2021-10-26T10:36:24.863')


delete from MecanizadoLog

select * from AndonTesting.dbo.MecanizadoLog

select * from Eventos

update MecanizadoLog set Inicio_Raspberry = '' where Inicio_Raspberry like '1900-01-01 00:00:00.000%'
update MecanizadoLog set Fin_Raspberry = '' where Fin_Raspberry like '1900-01-01 00:00:00.000%'