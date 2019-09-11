echo "Updating changelog for IOS SDK V3"
pushd .
cd content/ios/v3
git archive --remote=git@git.rtx.mapspeople.com:MapsIndoors/SDK/MISDKIOS.git develop CHANGELOG.md | tar -x
popd
echo "Updating changelog for IOS SDK v2"
pushd .
cd content/ios/v2
git archive --remote=git@git.rtx.mapspeople.com:MapsIndoors/SDK/MISDKIOS.git SDK_V2 CHANGELOG.md | tar -x
popd
echo "Updating changelog for IOS SDK v1"
pushd .
cd content/ios/v1
git archive --remote=git@git.rtx.mapspeople.com:MapsIndoors/SDK/MISDKIOS.git maintenance/sdk_v1 CHANGELOG.md | tar -x
popd
echo "Updating changelog for Web SDK"
pushd .
cd content/web/v3
git archive --remote=git@git.rtx.mapspeople.com:MapsIndoors/SDK/MISKDJS.git master CHANGELOG.md | tar -x
popd
echo "Updating changelog for CMS"
pushd .
cd content/cms
git archive --remote=git@git.rtx.mapspeople.com:MapsIndoors/CMS/MapsIndoorsCMS3.git master CHANGELOG.md | tar -x
popd
echo "Updating changelog for Android"
pushd .
cd content/android/v2
git archive --remote=git@git.rtx.mapspeople.com:MapsIndoors/SDK/MISDKAND.git develop:MapsIndoorsSDK CHANGELOG.md | tar -x
popd

REPLACE_STR="# Changelog"
REPLACEMENT="---\n\ntitle: Changelog\n\n---"

ANDROID=`cat content/android/changelog.md`
IOS=`cat content/ios/changelog.md`
CMS=`cat content/cms/changelog.md`

ANDROID="${ANDROID/#$REPLACE_STR/$REPLACEMENT}"
IOS="${IOS/#$REPLACE_STR/$REPLACEMENT}"
CMS="${CMS/#$REPLACE_STR/$REPLACEMENT}"

echo -e "$ANDROID" > /tmp/out && mv /tmp/out content/android/changelog.md
echo -e "$IOS" > /tmp/out && mv /tmp/out content/ios/changelog.md
echo -e "$CMS" > /tmp/out && mv /tmp/out content/cms/changelog.md