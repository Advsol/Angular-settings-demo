@echo Off

SET mypath=%~dp0
SET mypath=%mypath%dist\settings-demo\
echo %mypath:~0,-1%

"%ProgramFiles(x86)%\Microsoft SDKs\Azure\AzCopy\AzCopy.exe" /source:%mypath% /Dest:https://asiprostorage.blob.core.windows.net/innovations/settings-demo /SetContentType /Y /XO /S /DestSAS:"?st=2019-03-06T11%%3A30%%3A20Z&se=2019-03-21T19%%3A30%%3A00Z&sp=rwdl&sv=2018-03-28&sr=c&sig=[hidden]nPOpTLsfybMFskLi7sKUwMPyTRR57GPNFqWq5rk%%3D"