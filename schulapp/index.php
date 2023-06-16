<!DOCTYPE html>
<html>
<head>
    <title>Schul-App</title>
    <style>
        /* CSS für die zentrierte Ausrichtung */
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        /* CSS für die responsive Anpassung */
        @media only screen and (max-width: 768px) {
            /* Anpassungen für Tablets und Smartphones */
            table {
                width: 100%;
                max-width: 300px;
            }
        }

        @media only screen and (max-width: 480px) {
            /* Anpassungen für Smartphones */
            table {
                max-width: 200px;
            }
        }
    </style>
</head>
<body>
    <div class="center">
        <table>
            <tr>
                <td>
                    <img src="images/bild.jpg" alt="Bild" style="max-width: 100%;">
                </td>
            </tr>
            <tr>
                <td>
                    <a href="login.php"><button>Login</button></a>
                </td>
                <td>
                    <a href="register.php"><button>Register</button></a>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>

