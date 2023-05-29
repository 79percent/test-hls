1.把mp4文件转换为ts文件：
ffmpeg -y -i test.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb test.ts

2.把ts文件切片并生成t100X.m3u8文件，5秒一个切片
ffmpeg -i test.ts -c copy -map 0 -f segment -segment_list test.m3u8 -segment_time 5 test%03d.ts

http-server -p 8080 --cors

http://127.0.0.1:8080/test.m3u8