﻿/*
Deployment script for UriReduction.DataBase

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "UriReduction.DataBase"
:setvar DefaultFilePrefix "UriReduction.DataBase"
:setvar DefaultDataPath "C:\Users\g.shuksto\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB"
:setvar DefaultLogPath "C:\Users\g.shuksto\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'Starting rebuilding table [UriReduction].[AssociatedUri]...';


GO
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;

CREATE TABLE [UriReduction].[tmp_ms_xx_AssociatedUri] (
    [Id]       INT             IDENTITY (0, 1) NOT NULL,
    [LongUri]  NVARCHAR (4000) NOT NULL,
    [ShortUri] NVARCHAR (10)   NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    UNIQUE NONCLUSTERED ([LongUri] ASC),
    UNIQUE NONCLUSTERED ([ShortUri] ASC)
);

IF EXISTS (SELECT TOP 1 1 
           FROM   [UriReduction].[AssociatedUri])
    BEGIN
        SET IDENTITY_INSERT [UriReduction].[tmp_ms_xx_AssociatedUri] ON;
        INSERT INTO [UriReduction].[tmp_ms_xx_AssociatedUri] ([Id], [LongUri], [ShortUri])
        SELECT   [Id],
                 [LongUri],
                 [ShortUri]
        FROM     [UriReduction].[AssociatedUri]
        ORDER BY [Id] ASC;
        SET IDENTITY_INSERT [UriReduction].[tmp_ms_xx_AssociatedUri] OFF;
    END

DROP TABLE [UriReduction].[AssociatedUri];

EXECUTE sp_rename N'[UriReduction].[tmp_ms_xx_AssociatedUri]', N'AssociatedUri';

COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;


GO
PRINT N'Update complete.';


GO
