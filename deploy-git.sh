git add -A
git status
echo "Please enter commit message: "
read input_message
echo "You entered: $input_message"
git commit -m "$input_message"
git push -u origin master
