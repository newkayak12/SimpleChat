package com.randomchat.chat_spring.configurations;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
@RequiredArgsConstructor
@Component
@Slf4j
public class Interceptor implements ChannelInterceptor {
    private final ObjectMapper mapper;
        @Override
        public Message<?> preSend(Message<?> message, MessageChannel channel) {
            StompHeaderAccessor stompHeaderAccessor = StompHeaderAccessor.wrap(message);

            if( stompHeaderAccessor.getCommand().equals(StompCommand.SUBSCRIBE) ) {
                Message<String> msg = new Message<String>() {
                    @Override
                    public String getPayload() {
                        try {
                            return mapper.writeValueAsString(Map.of("msg", "새로운 상대가 입장했습니다.", "type", "NOTICE"));
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                        return null;
                    }

                    @Override
                    public MessageHeaders getHeaders() {
                        return new MessageHeaders(Map.of(
                                "simpSessionAttributes", Map.of(),
                                "simpMessageType", SimpMessageType.MESSAGE,
                                "stompCommand", StompCommand.RECEIPT,
                                "simpSessionId", stompHeaderAccessor.getSessionId(),
                                "simpHeartbeat", stompHeaderAccessor.getHeartbeat(),
                                "simpDestination", String.format("/send/message")
                        ));
                    }
                };
                channel.send(msg);

            }

            return message;
        }
}
