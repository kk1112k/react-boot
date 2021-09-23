import axios from 'axios'; //엑시오스

export default function customAxios(url, callback) {
    axios(
        {
            url:'/api' +url,
            method: 'post',

            /**
             * 개발 환경에서의 크로스 도메인 이슈를 해결하기 위한 코드로
             * 운영 환경에 배포할 경우에는 15~16행을 주석처리합니다.
             */

            baseURL: 'http://localhost:8080',
            withCredentials: true,
        }
    ).then(function (response) {
        callback(response.data);
    });
}