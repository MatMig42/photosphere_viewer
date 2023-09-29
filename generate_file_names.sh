yourfilenames=`ls ./src/assets/**/*.jpg`
outfile='./src/assets/image_list.json'
rm -f ${outfile}
touch ${outfile}
echo "{" >> ${outfile}
for eachfile in $yourfilenames
do
    file_name=$(basename ${eachfile})
    folder=$(dirname ${eachfile})
    top_folder=$(sed 's#.*/##' <<< ${folder})
    echo -e "\t\"${file_name}\": \"${top_folder}\",">> ${outfile}
done
truncate -s -2 ${outfile}
echo -e "\n}" >> ${outfile}