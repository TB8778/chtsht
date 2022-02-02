INSERT [dbo].[Parameters] ([Code], [Description], [Value], [CreatedBy], [UpdatedBy])
SELECT x.[Code], x.[Description], x.[InitialValue], @defaultUser, @defaultUser
FROM (
	SELECT  N'PERFORMANCE_FILEPATH' AS 'Code', N'Filepath of performances analizor tool' AS 'Description', N'UNSET' AS 'InitialValue'
    UNION
    SELECT  N'PERFORMANCE_FILEPATH', N'Filepath of performances analizor tool', N'UNSET'
    UNION
    SELECT  N'PERFORMANCE_RUN_FLAG', N'Execute a performance 0 or 1 ', N'UNSET'
) x
LEFT JOIN [dbo].[Parameters] p ON p.[Code] = x.[Code]
WHERE p.[Code] IS NULL
