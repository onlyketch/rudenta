<?
        $to = "byketch@yandex.ru";
        $subject = 'Новая запись на прием';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['callback-name'].'</p>
                        <p>Телефон: '.$_POST['callback-phone'].'</p>
                        <p>Комментарий: '.$_POST['callback-comment'].'</p>                                    
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
?>