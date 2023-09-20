package com.randomchat.chat_spring.messageController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
@RequiredArgsConstructor
@Slf4j
public class MessageController {
    private final SimpMessageSendingOperations sendingOperations;

    @MessageMapping(value = "/message")
    public void sendMessage(@Payload Map<String, String> payload) {
        log.warn("MSG {}", payload);
        sendingOperations.convertAndSend("/subscribe", payload);
    }
}
