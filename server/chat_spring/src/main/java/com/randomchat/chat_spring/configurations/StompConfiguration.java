package com.randomchat.chat_spring.configurations;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import java.util.Map;

@Configuration(value = "stomp_config")
@EnableWebSocketMessageBroker
@Slf4j
public class StompConfiguration implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").setAllowedOrigins("*");
        registry.addEndpoint("/ws").setAllowedOrigins("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/subscribe");
        registry.setApplicationDestinationPrefixes("/send");
    }
//    @Override
//    public void configureClientInboundChannel(ChannelRegistration registration) {
//       registration.interceptors(new ChannelInterceptor() {
//           @Override
//           public Message<?> preSend(Message<?> message, MessageChannel channel) {
//
//               StompHeaderAccessor stompHeaderAccessor = StompHeaderAccessor.wrap(message);
//
//               log.warn(" {} ", stompHeaderAccessor.getSessionId());
//               log.warn(" {} ", stompHeaderAccessor.getShortLogMessage(message));
//               if( stompHeaderAccessor.getCommand().equals(StompCommand.SUBSCRIBE) ) {
//
//                   return ChannelInterceptor.super.preSend(
//                           new Message<Map<String,String>>() {
//                               @Override
//                               public Map<String,String> getPayload() {
//                                   return Map.of("msg", "사용자가 입장했습니다.");
//                               }
//
//                               @Override
//                               public MessageHeaders getHeaders() {
//
//                                   return message.getHeaders();
//                               }
//                           },
//                           channel
//                   );
//               }
//               return ChannelInterceptor.super.preSend(message, channel);
//           }
//       });
//    }
}
