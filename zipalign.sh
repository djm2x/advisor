#var
# env
# echo "dj= $DJ"
path='./platforms/android/app/build/outputs/apk/release';
r='app-release.apk';
f='app-finale.apk';
p_a="$path/$r";
p_f="$f";
# read -p 'Entrez votre nom : ' -n 5 o
echo ${p_a};
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk my-alias
# zipalign -v 4 p_a p_f
zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release.apk app-finale.apk
echo "zipalign a terminer.";




# -t : limiter le temps autorisé pour saisir un message
# -s : ne pas afficher le texte saisi