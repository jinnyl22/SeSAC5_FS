# 파일을 돌려끼우고 싶을 때 사용

#!/bin/sh

 echo $#
 if [ $# -lt 1 ]; then
     echo "Input the file!"
     echo "usage> lncat<file>"
     exit
 fi

 FILE=$1 # 여기가 파일명을 넣어줄 변수

 PRE_IFS=$IFS
 IFS="
 "

 LN=1 # 라인넘버 변수

 #for i in $(cat test.txt)
 #for i in `cat test.txt | sed 's/$/ /g'`
 #for i in `cat $1 $2 $3 | sed 's/$/ /g'` 파일을 여러개 실행시키고 싶을 때!
 for i in `cat $FILE | sed 's/$/ /g'` # $FILE 자리에 파일명이 들어감
 do
    echo -e "$LN\t$i"
    LN=`expr $LN + 1`
    #LN=$((LN+1))
 done

 IFS=$PRE_IFS



# text 파일 실행
#!/bin/sh

#  PRE_IFS=$IFS
#  IFS="
#  "

#  LN=1

#  #for i in $(cat test.txt)
#  for i in `cat test.txt | sed 's/$/ /g'`
# 	 do
#     echo -e "$LN\t$i\b" # 역슬래시를 실행시켜주기 위해 -e 옵션을 걸어줌
#     LN=`expr $LN + 1` # expr은 터미널에서 숫자를 더할 때 사용하는 명령어
#     #LN=$((LN+1))
# 	 done

#  IFS=$PRE_IFS