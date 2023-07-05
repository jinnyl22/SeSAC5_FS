# test라는 텍스트 파일을 만든 후
# 파일의 내용을 라인번호와 함께 출력하는 스크립트를 작성하시오

# (출력 예시)
# 1 세종대왕
# 2 훈민정음
# 3 
# 4 apple
# 5 banana
# 6
#--------------------------------------------------------------------

#!/bin/bash

PRE_IFS=IFS
IFS="
"
for i in `nl -ba test.txt`
do
    echo $i
done

IFS=PRE_IFS