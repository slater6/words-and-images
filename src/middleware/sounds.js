import soundsMiddleware from 'redux-sounds';

const soundsData = {
    fail_1 : '/sounds/fail/fail_1.mp3',
    fail_2 : '/sounds/fail/fail_2.mp3',
    fail_3 : '/sounds/fail/fail_3.mp3',
    fail_4 : '/sounds/fail/fail_4.mp3',
    fail_5 : '/sounds/fail/fail_5.mp3',
    fail_6 : '/sounds/fail/fail_6.mp3',
    fail_7 : '/sounds/fail/fail_7.mp3',
    fail_8 : '/sounds/fail/fail_8.mp3',

    success_1:'/sounds/success/success_1.mp3',
    success_2:'/sounds/success/success_2.mp3',
    success_3:'/sounds/success/success_3.mp3',
    success_4:'/sounds/success/success_4.mp3',
}

const sounds = soundsMiddleware(soundsData)

export default sounds