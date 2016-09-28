git add -A
git status
echo "Please enter commit message: "
read input_message
echo "============================"
echo "You entered: $input_message"
echo "============================"
git commit -m "$input_message"
git push -u origin master
