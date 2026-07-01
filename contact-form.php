<?php
// Configuration
$to_email = "om.mokadem@gmail.com";
$subject_prefix = "Contact depuis le site Astreos - ";

// Vérifier que c'est une requête POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer et nettoyer les données du formulaire
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $service = strip_tags(trim($_POST["service"]));
    $message = strip_tags(trim($_POST["message"]));
    
    // Vérifier que les données requises sont présentes
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Veuillez remplir tous les champs requis avec des informations valides.";
        exit;
    }
    
    // Traduire le service en français
    $services_fr = [
        "surveillance" => "Surveillance",
        "distribution" => "Distribution",
        "evenementiel" => "Événementiel",
        "incendie" => "Sécurité Incendie",
        "autre" => "Autre"
    ];
    
    $service_name = isset($services_fr[$service]) ? $services_fr[$service] : $service;
    
    // Construire le sujet de l'email
    $subject = $subject_prefix . $service_name;
    
    // Construire le contenu de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $phone\n";
    $email_content .= "Service souhaité: $service_name\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Construire les en-têtes de l'email
    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Envoyer l'email
    if (mail($to_email, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.";
    } else {
        http_response_code(500);
        echo "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement par téléphone.";
    }
    
} else {
    http_response_code(403);
    echo "Une erreur s'est produite. Veuillez réessayer.";
}
?>



