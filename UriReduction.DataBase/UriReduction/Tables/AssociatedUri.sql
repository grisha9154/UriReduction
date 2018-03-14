﻿CREATE TABLE [UriReduction].[AssociatedUri]
(
	[Id] INT IDENTITY(0,1) NOT NULL PRIMARY KEY, 
    [LongUri] NVARCHAR(4000) NOT NULL, 
    [ShortUri] NVARCHAR(10) NOT NULL,
	[RequestCount] INT NOT NULL DEFAULT 0, 
    UNIQUE NONCLUSTERED ([LongUri] ASC),
	UNIQUE NONCLUSTERED ([ShortUri] ASC)
)
