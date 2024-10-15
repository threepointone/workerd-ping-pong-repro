## A repro to show that workerd is not returning the correct payload in pong frames on websockets

- run `npm run start` to start the server / node client / workerd client (this will also open your browser to kickstart the workerd client)
- observe that the node client correctly sends the pong frames with the correct payload, while the workerd client does not

Sample output:

```
[server] pong from node payload: the ping payload
[server] pong from workerd payload: ��N׉�E�مJ���J�
[server] pong from workerd payload: ���*���m��s���n
[server] pong from node payload: the ping payload
[server] pong from workerd payload:
[server] #Ŀ"��^;��$��
[server] pong from workerd payload: T*P!V
                                         .HL.U
[server] pong from node payload: the ping payload
[server] pong from workerd payload: ��
[server] _��ږ��
[server] pong from workerd payload: ի��Ѫ������ͬ��
[server] pong from node payload: the ping payload
```
