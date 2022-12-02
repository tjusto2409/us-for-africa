<!DOCTYPE html>
<html lang="en">
    <head>   
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?= bloginfo() ?> - <?= get_the_title() ?></title>
        <link rel="icon" type="image/x-icon" href="./assets/favicon/favicon.ico">
        <?php wp_head(); ?>
        <style>
            html {
                margin: 0 !important;
            }
        </style>
    </head>