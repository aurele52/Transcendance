import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class PongGateway {
  afterInit() {
    console.log('gateway initialised');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log(`Client : ${client.id} connected`);
  }
  @SubscribeMessage('message')
  onPing(client: Socket): void {
    console.log(`Client : ${client.id} send ping`);
    client.emit('server.pong', {
      message: 'pong',
    });
  }
  handleDisconnect(client: any) {
    console.log(`Cliend id:${client.id} disconnected`);
  }
}
