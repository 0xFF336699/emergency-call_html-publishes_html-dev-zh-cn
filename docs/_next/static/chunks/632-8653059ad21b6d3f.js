"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[632],{

/***/ 24632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/livekit-client@2.15.2_@types+dom-mediacapture-record@1.0.22/node_modules/livekit-client/dist/livekit-client.esm.mjs
var livekit_client_esm = __webpack_require__(89596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(328);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(87924);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VolumeUp.js
var VolumeUp = __webpack_require__(22738);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VolumeOff.js
var VolumeOff = __webpack_require__(76972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Visibility.js
var Visibility = __webpack_require__(31049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VisibilityOff.js
var VisibilityOff = __webpack_require__(4382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/MicOff.js
var MicOff = __webpack_require__(40677);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Mic.js
var Mic = __webpack_require__(70792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Videocam.js
var Videocam = __webpack_require__(84095);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VideocamOff.js
var VideocamOff = __webpack_require__(83172);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/CallEnd.js
var CallEnd = __webpack_require__(13634);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Refresh.js
var Refresh = __webpack_require__(15264);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
;// ../../libs/im/livekit/src/livekit-meeting/MeetingRoom5.tsx







// 日志记录器
const logger = new Log/* Log */.tG(false, 'livekit-meeting.MeetingRoom');
const uiLogger = logger.sub(false, 'MeetingRoom_ui');
// 视频预设
const VIDEO_PRESET = {
    width: 1280,
    height: 720,
    // @ts-ignore - frameRate is used by LiveKit internally
    frameRate: 24,
    maxBitrate: 3000 * 1000
};
// 类型定义已移至 meetint-room.intf.ts
// function getTokenEndpoint(): string {
//     if (!mainModel.appConfig?.livekit?.jwt) {
//         throw new Error('LiveKit JWT endpoint is not configured');
//     }
//     return `${mainModel.appConfig.livekit.jwt}/token`;
// }
// 主组件实现
function MeetingRoomComponent(param, ref) {
    let { livekitConfig, roomName, userName, onDisconnect, onError, className = '', style, sx, directly = false } = param;
    // 全局音视频控制状态
    const [globalMediaState, setGlobalMediaState] = (0,react.useState)({
        isAudioEnabled: true,
        isVideoEnabled: true
    });
    // 远程参与者媒体订阅状态
    const [remoteMediaState, setRemoteMediaState] = (0,react.useState)({
        isAudioSubscribed: true,
        isVideoSubscribed: true
    });
    // 切换全局远程音频订阅状态
    const toggleRemoteAudio = (0,react.useCallback)(()=>{
        const newState = !remoteMediaState.isAudioSubscribed;
        logger.log('Toggling remote audio subscription to:', newState);
        // 更新状态
        setRemoteMediaState((prev)=>{
            logger.log('Remote audio subscription state changed:', {
                from: prev.isAudioSubscribed,
                to: newState
            });
            return {
                ...prev,
                isAudioSubscribed: newState
            };
        });
        // 更新所有远程参与者的音频订阅状态
        if (roomRef.current) {
            const participantCount = roomRef.current.remoteParticipants.size;
            logger.log("Updating audio subscription for ".concat(participantCount, " remote participants"));
            roomRef.current.remoteParticipants.forEach((participant, identity)=>{
                let audioTrackCount = 0;
                participant.trackPublications.forEach((publication)=>{
                    if (publication.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                        audioTrackCount++;
                        logger.log("Setting audio subscription for ".concat(identity, " to ").concat(newState), {
                            trackSid: publication.trackSid,
                            isSubscribed: publication.isSubscribed
                        });
                        publication.setSubscribed(newState);
                    }
                });
                logger.log("Processed ".concat(audioTrackCount, " audio tracks for participant: ").concat(identity));
            });
        }
    }, [
        remoteMediaState.isAudioSubscribed
    ]);
    // 切换全局远程视频订阅状态
    const toggleRemoteVideo = (0,react.useCallback)(()=>{
        const newState = !remoteMediaState.isVideoSubscribed;
        logger.log('Toggling remote video subscription to:', newState);
        // 更新状态
        setRemoteMediaState((prev)=>{
            logger.log('Remote video subscription state changed:', {
                from: prev.isVideoSubscribed,
                to: newState
            });
            return {
                ...prev,
                isVideoSubscribed: newState
            };
        });
        // 更新所有远程参与者的视频订阅状态
        if (roomRef.current) {
            const participantCount = roomRef.current.remoteParticipants.size;
            logger.log("Updating video subscription for ".concat(participantCount, " remote participants"));
            roomRef.current.remoteParticipants.forEach((participant, identity)=>{
                let videoTrackCount = 0;
                participant.trackPublications.forEach((publication)=>{
                    if (publication.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                        videoTrackCount++;
                        logger.log("Setting video subscription for ".concat(identity, " to ").concat(newState), {
                            trackSid: publication.trackSid,
                            isSubscribed: publication.isSubscribed
                        });
                        publication.setSubscribed(newState);
                    }
                });
                logger.log("Processed ".concat(videoTrackCount, " video tracks for participant: ").concat(identity));
            });
        }
    }, [
        remoteMediaState.isVideoSubscribed
    ]);
    // 处理参与者连接
    const handleParticipantConnected = (0,react.useCallback)((participant)=>{
        logger.log('Participant connected:', participant.identity, {
            audioSubscribed: remoteMediaState.isAudioSubscribed,
            videoSubscribed: remoteMediaState.isVideoSubscribed
        });
        // 应用当前的全局订阅设置
        let audioTracksProcessed = 0;
        let videoTracksProcessed = 0;
        participant.trackPublications.forEach((publication)=>{
            if (publication.kind === livekit_client_esm/* Track */.CC.Kind.Audio || publication.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                const isAudio = publication.kind === livekit_client_esm/* Track */.CC.Kind.Audio;
                const shouldSubscribe = isAudio ? remoteMediaState.isAudioSubscribed : remoteMediaState.isVideoSubscribed;
                logger.log("Setting ".concat(isAudio ? 'audio' : 'video', " subscription for new participant ").concat(participant.identity, " to ").concat(shouldSubscribe), {
                    trackSid: publication.trackSid,
                    isSubscribed: publication.isSubscribed
                });
                publication.setSubscribed(shouldSubscribe);
                if (isAudio) audioTracksProcessed++;
                else videoTracksProcessed++;
            }
        });
        logger.log("Processed tracks for new participant ".concat(participant.identity, ":"), {
            audioTracks: audioTracksProcessed,
            videoTracks: videoTracksProcessed
        });
        // 添加参与者到状态
        setParticipants((prev)=>{
            const exists = prev.some((p)=>p.identity === participant.identity);
            if (!exists) {
                logger.log('Adding participant to state:', participant.identity);
                return [
                    ...prev,
                    participant
                ];
            }
            logger.log('Participant already in state, not adding again:', participant.identity);
            return prev;
        });
    }, [
        remoteMediaState
    ]);
    // Refs
    const roomRef = (0,react.useRef)(null);
    const localTracksRef = (0,react.useRef)([]);
    const videoElements = (0,react.useRef)({});
    const audioElements = (0,react.useRef)({});
    const [participantStates, setParticipantStates] = (0,react.useState)({});
    const isUnmountedRef = (0,react.useRef)(false);
    // State
    const [isConnecting, setIsConnecting] = (0,react.useState)(false);
    const [hasConnected, setHasConnected] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [isMuted, setIsMuted] = (0,react.useState)(false);
    const [isVideoEnabled, setIsVideoEnabled] = (0,react.useState)(true);
    const [participants, setParticipants] = (0,react.useState)([]);
    // 获取 token
    const fetchToken = (0,react.useCallback)(async (roomName, identity)=>{
        try {
            const response = await fetch("".concat(livekitConfig.jwt, "/token"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    room_name: roomName,
                    identity
                })
            });
            if (!response.ok) {
                throw new Error('获取 token 失败');
            }
            const data = await response.json();
            return data.token;
        } catch (error) {
            uiLogger.error('获取 token 失败:', error);
            throw error;
        }
    }, []);
    // 连接到房间
    const connectToRoom = (0,react.useCallback)(async ()=>{
        if (isConnecting || hasConnected) return;
        setIsConnecting(true);
        setError(null);
        try {
            // 1. 获取 token
            const token = await fetchToken(roomName, userName);
            uiLogger.log('token:', token);
            // 2. 创建本地轨道
            const { audioTrack, videoTrack } = await createLocalTracks();
            localTracksRef.current = [
                audioTrack,
                videoTrack
            ];
            uiLogger.log('audioTrack:', audioTrack);
            uiLogger.log('videoTrack:', videoTrack);
            // 3. 创建房间连接
            const room = new livekit_client_esm/* Room */.Wv({
                adaptiveStream: true,
                dynacast: true,
                videoCaptureDefaults: {
                    resolution: VIDEO_PRESET
                },
                // @ts-ignore - publishDefaults is a valid option
                publishDefaults: {
                    dtx: true,
                    red: true,
                    forceStereo: false,
                    simulcast: true
                }
            });
            uiLogger.log('room:', room);
            // 4. 设置事件监听
            setupRoomListeners(room);
            // 5. 连接到房间
            await room.connect(livekitConfig.wsUrl, token, {
                autoSubscribe: true
            });
            uiLogger.log('room connected');
            // 6. 发布本地轨道
            try {
                await Promise.all([
                    room.localParticipant.publishTrack(audioTrack),
                    room.localParticipant.publishTrack(videoTrack)
                ]);
            } catch (publishError) {
                uiLogger.error('发布轨道失败:', publishError);
            // 即使发布失败也继续，因为可能已经有其他参与者发布了相同的轨道
            }
            // 7. 更新引用和状态
            roomRef.current = room;
            setHasConnected(true);
            // 8. 添加现有远程参与者到状态
            const remoteParticipants = Array.from(room.remoteParticipants.values());
            setParticipants(remoteParticipants);
            // 9. 更新本地参与者状态
            updateParticipantState(room.localParticipant.identity, {
                isAudioEnabled: true,
                isVideoEnabled: true,
                audioTrack,
                videoTrack
            });
            // 10. 为现有远程参与者设置轨道
            remoteParticipants.forEach((participant)=>{
                // 初始化远程参与者状态
                initParticipantState(participant);
                uiLogger.log('已初始化远程参与者状态:', participant.identity);
                // 使用 getTrackPublications 获取所有轨道发布
                participant.getTrackPublications().forEach((publication)=>{
                    if (publication.track && publication.track instanceof livekit_client_esm/* RemoteTrack */.O9) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    }
                });
            });
            // 初始化本地参与者状态
            if (room.localParticipant) {
                initParticipantState(room.localParticipant);
                uiLogger.log('已初始化本地参与者状态:', room.localParticipant.identity);
            }
            uiLogger.log('成功加入会议');
        } catch (error) {
            uiLogger.error('连接房间失败啦:', error);
            setError('加入会议失败，请检查网络和权限设置');
            // 发生错误时清理资源
            cleanupTracks(localTracksRef.current);
            localTracksRef.current = [];
            if (roomRef.current) {
                try {
                    await roomRef.current.disconnect();
                } catch (e) {
                    uiLogger.error('断开连接时出错:', e);
                }
                roomRef.current = null;
            }
        } finally{
            setIsConnecting(false);
        }
    }, [
        roomName,
        userName,
        isConnecting,
        hasConnected,
        fetchToken
    ]);
    // 创建本地音视频轨道
    const createLocalTracks = (0,react.useCallback)(async ()=>{
        try {
            const [audioTrack, videoTrack] = await Promise.all([
                (0,livekit_client_esm/* createLocalAudioTrack */.rV)({
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }),
                (0,livekit_client_esm/* createLocalVideoTrack */.yn)({
                    resolution: {
                        width: 1280,
                        height: 720,
                        frameRate: 24
                    }
                })
            ]);
            return {
                audioTrack,
                videoTrack
            };
        } catch (error) {
            uiLogger.error('创建本地轨道失败:', error);
            throw error;
        }
    }, []);
    // 清理轨道
    const cleanupTracks = (0,react.useCallback)((tracks)=>{
        tracks.forEach((track)=>{
            track.stop();
            track.detach();
        });
    }, []);
    // 跟踪已处理的轨道元素
    const trackElementsRef = (0,react.useRef)({});
    const videoElementsRef = (0,react.useRef)({});
    const audioElementsRef = (0,react.useRef)({});
    // 更新参与者状态
    const updateParticipantState = (0,react.useCallback)((identity, state)=>{
        setParticipantStates((prev)=>({
                ...prev,
                [identity]: {
                    ...prev[identity] || {
                        isAudioEnabled: true,
                        isVideoEnabled: true,
                        isAudioEnabledGlobal: true,
                        isVideoEnabledGlobal: true
                    },
                    ...state
                }
            }));
    }, []);
    // 处理轨道订阅
    const handleTrackSubscribed = (0,react.useCallback)((track, publication, participant)=>{
        if (!track) return ()=>{};
        const { identity } = participant;
        const isVideoTrack = track.kind === livekit_client_esm/* Track */.CC.Kind.Video;
        uiLogger.log("处理 ".concat(track.kind, " 轨道订阅:"), identity, track);
        // 更新轨道状态的函数
        const updateTrackState = ()=>{
            const isMuted = track.isMuted;
            const stateUpdate = {};
            if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                stateUpdate.isAudioEnabled = !isMuted;
            } else if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                stateUpdate.isVideoEnabled = !isMuted;
            }
            updateParticipantState(identity, stateUpdate);
            // 强制触发重新渲染以确保 ParticipantVideo 组件更新
            if (isVideoTrack) {
                setParticipants((prev)=>[
                        ...prev
                    ]);
            }
        };
        // 监听轨道静音/取消静音事件
        track.on('muted', updateTrackState);
        track.on('unmuted', updateTrackState);
        // 初始状态更新
        updateTrackState();
        // 强制更新参与者列表以触发重新渲染
        // 这确保了即使没有状态变化，组件也会检查新的轨道
        setParticipants((prev)=>{
            const participantExists = prev.some((p)=>p.identity === identity);
            if (!participantExists) {
                return [
                    ...prev,
                    participant
                ];
            }
            return [
                ...prev
            ];
        });
        // 清理函数
        return ()=>{
            track.off('muted', updateTrackState);
            track.off('unmuted', updateTrackState);
        };
    }, [
        updateParticipantState
    ]);
    // 设置房间事件监听
    const setupRoomListeners = (0,react.useCallback)((room)=>{
        const eventHandlers = {
            // 处理远程参与者连接
            participantConnected: (participant)=>{
                if (!(participant instanceof livekit_client_esm/* RemoteParticipant */.qI)) return;
                uiLogger.log('远程参与者已连接:', participant.identity);
                // 添加新参与者到状态（使用函数式更新确保不重复添加）
                setParticipants((prev)=>{
                    // 如果已经存在该参与者，则返回原数组
                    if (prev.some((p)=>p.identity === participant.identity)) {
                        return prev;
                    }
                    return [
                        ...prev,
                        participant
                    ];
                });
                // 监听参与者的轨道发布
                const handleTrackPublished = (publication)=>{
                    uiLogger.log('远程参与者发布轨道:', publication.kind, participant.identity);
                    if (publication.track) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    } else {
                        publication.once('subscribed', (track)=>{
                            handleTrackSubscribed(track, publication, participant);
                        });
                    }
                };
                // 添加轨道发布监听
                participant.on('trackPublished', handleTrackPublished);
                // 处理已经发布的轨道
                participant.trackPublications.forEach((publication)=>{
                    if (publication.track) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    }
                });
                // 返回清理函数
                return ()=>{
                    participant.off('trackPublished', handleTrackPublished);
                };
            },
            // 处理参与者断开连接
            participantDisconnected: (participant)=>{
                uiLogger.log('远程参与者已断开连接:', participant.identity);
                setParticipants((prev)=>{
                    const newParticipants = prev.filter((p)=>p.identity !== participant.identity);
                    uiLogger.log('更新后的参与者列表:', newParticipants.map((p)=>p.identity));
                    return newParticipants;
                });
            },
            // 处理轨道订阅
            trackSubscribed: (track, publication, participant)=>{
                if (!track) return;
                uiLogger.log('轨道订阅成功:', track.kind, participant.identity);
                // 处理远程轨道订阅
                handleTrackSubscribed(track, publication, participant);
            },
            disconnected: (reason)=>{
                var _reason_toString;
                const reasonStr = (reason === null || reason === void 0 ? void 0 : (_reason_toString = reason.toString) === null || _reason_toString === void 0 ? void 0 : _reason_toString.call(reason)) || '未知原因';
                uiLogger.log('已从房间断开连接，原因:', reasonStr);
                // 更新状态但不调用 handleDisconnect，因为可能是我们主动断开的
                setHasConnected(false);
                setParticipants([]);
                setError(null);
            },
            reconnecting: ()=>{
                uiLogger.log('正在重新连接到房间...');
                setError('正在重新连接...');
            },
            reconnected: ()=>{
                uiLogger.log('已重新连接到房间');
                setError(null);
            }
        };
        // 添加事件监听
        room.on(livekit_client_esm/* RoomEvent */.u9.Disconnected, eventHandlers.disconnected).on(livekit_client_esm/* RoomEvent */.u9.Reconnecting, eventHandlers.reconnecting).on(livekit_client_esm/* RoomEvent */.u9.Reconnected, eventHandlers.reconnected).on(livekit_client_esm/* RoomEvent */.u9.ParticipantConnected, handleParticipantConnected) // 使用新的处理函数
        .on(livekit_client_esm/* RoomEvent */.u9.ParticipantDisconnected, eventHandlers.participantDisconnected).on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, eventHandlers.trackSubscribed);
        // 返回清理函数
        return ()=>{
            if (!room) return;
            room.off(livekit_client_esm/* RoomEvent */.u9.Disconnected, eventHandlers.disconnected).off(livekit_client_esm/* RoomEvent */.u9.Reconnecting, eventHandlers.reconnecting).off(livekit_client_esm/* RoomEvent */.u9.Reconnected, eventHandlers.reconnected).off(livekit_client_esm/* RoomEvent */.u9.ParticipantConnected, eventHandlers.participantConnected).off(livekit_client_esm/* RoomEvent */.u9.ParticipantDisconnected, eventHandlers.participantDisconnected).off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, eventHandlers.trackSubscribed);
            // 确保返回 void
            return undefined;
        };
    }, [
        handleTrackSubscribed
    ]);
    // 离开会议
    const leaveMeeting = (0,react.useCallback)(async ()=>{
        uiLogger.log('正在离开会议...');
        try {
            // 停止所有本地轨道
            cleanupTracks(localTracksRef.current);
            // 断开房间连接
            if (roomRef.current) {
                await roomRef.current.disconnect();
                roomRef.current = null;
            }
            // 更新状态
            setHasConnected(false);
            setParticipants([]);
            setError(null);
            // 清除所有媒体元素
            Object.values(videoElements.current).forEach((el)=>el && el.remove());
            Object.values(audioElements.current).forEach((el)=>el && el.remove());
            videoElements.current = {};
            audioElements.current = {};
            // 调用断开连接回调
            if (onDisconnect) {
                onDisconnect();
            }
            uiLogger.log('已成功离开会议');
        } catch (error) {
            uiLogger.error('离开会议时出错:', error);
            setError('离开会议时出错，请重试');
        }
    }, [
        onDisconnect
    ]);
    // 清理函数
    const cleanup = (0,react.useCallback)(async function() {
        let isUnmounting = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        // 如果是组件卸载，设置卸载标志
        if (isUnmounting) {
            isUnmountedRef.current = true;
        }
        uiLogger.log('执行清理...');
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        try {
            if (audioTrack) {
                await audioTrack.stop();
            }
            if (videoTrack) {
                await videoTrack.stop();
            }
        } catch (error) {
            uiLogger.error('停止轨道失败:', error);
        }
        // 清理轨道
        cleanupTracks(localTracksRef.current);
        localTracksRef.current = [];
        // 清理房间
        if (roomRef.current) {
            roomRef.current.disconnect();
            roomRef.current = null;
        }
        // 清理状态
        setHasConnected(false);
        setParticipants([]);
        setParticipantStates({});
    }, []);
    // 更新全局媒体状态
    const updateGlobalMediaState = (0,react.useCallback)((audioEnabled, videoEnabled)=>{
        setGlobalMediaState((prev)=>({
                ...prev,
                isAudioEnabled: audioEnabled,
                isVideoEnabled: videoEnabled
            }));
    }, []);
    // 切换静音状态（全局控制）
    const toggleMute = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        if (!audioTrack) return;
        try {
            // 全局按钮基于全局状态进行切换
            const newGlobalAudioState = !globalMediaState.isAudioEnabled;
            // 同步更新本地麦克风的物理状态
            if (newGlobalAudioState) {
                await audioTrack.unmute();
            } else {
                await audioTrack.mute();
            }
            // 更新本地UI状态
            setIsMuted(!newGlobalAudioState);
            updateParticipantState(localParticipant.identity, {
                isAudioEnabled: newGlobalAudioState
            });
            // 更新全局音频状态，这将影响所有参与者的有效状态
            updateGlobalMediaState(newGlobalAudioState, globalMediaState.isVideoEnabled);
        } catch (error) {
            uiLogger.error('切换静音状态失败:', error);
            setError('切换麦克风状态失败');
        }
    }, [
        globalMediaState,
        updateParticipantState,
        updateGlobalMediaState
    ]);
    // 切换视频状态（全局控制）
    const toggleVideo = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        if (!videoTrack) return;
        try {
            // 全局按钮基于全局状态进行切换
            const newGlobalVideoState = !globalMediaState.isVideoEnabled;
            // 同步更新本地摄像头的物理状态
            if (newGlobalVideoState) {
                await videoTrack.unmute();
            } else {
                await videoTrack.mute();
            }
            // 更新本地UI状态
            setIsVideoEnabled(newGlobalVideoState);
            updateParticipantState(localParticipant.identity, {
                isVideoEnabled: newGlobalVideoState
            });
            // 更新全局视频状态，这将影响所有参与者的有效状态
            updateGlobalMediaState(globalMediaState.isAudioEnabled, newGlobalVideoState);
        } catch (error) {
            uiLogger.error('切换视频状态失败:', error);
            setError('切换摄像头状态失败');
        }
    }, [
        globalMediaState,
        updateParticipantState,
        updateGlobalMediaState
    ]);
    // 切换本地静音状态（仅本地tile）
    const handleLocalMuteToggle = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        if (!audioTrack) return;
        try {
            const newMutedState = !isMuted;
            if (newMutedState) {
                await audioTrack.mute();
            } else {
                await audioTrack.unmute();
            }
            setIsMuted(newMutedState);
            updateParticipantState(localParticipant.identity, {
                isAudioEnabled: !newMutedState
            });
        } catch (error) {
            uiLogger.error('切换本地静音状态失败:', error);
            setError('切换麦克风状态失败');
        }
    }, [
        isMuted,
        updateParticipantState
    ]);
    // 切换本地视频状态（仅本地tile）
    const handleLocalVideoToggle = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        if (!videoTrack) return;
        try {
            const newVideoState = !isVideoEnabled;
            if (newVideoState) {
                await videoTrack.unmute();
            } else {
                await videoTrack.mute();
            }
            setIsVideoEnabled(newVideoState);
            updateParticipantState(localParticipant.identity, {
                isVideoEnabled: newVideoState
            });
        } catch (error) {
            uiLogger.error('切换本地视频状态失败:', error);
            setError('切换摄像头状态失败');
        }
    }, [
        isVideoEnabled,
        updateParticipantState
    ]);
    // 组件卸载时清理资源
    (0,react.useEffect)(()=>{
        return ()=>{
            // 清理资源
            cleanup(true);
        };
    }, []);
    // 获取参与者状态
    const getParticipantState = (0,react.useCallback)((identity)=>{
        return participantStates[identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
    }, [
        participantStates
    ]);
    // 初始化参与者状态
    const initParticipantState = (0,react.useCallback)((participant)=>{
        var _participant_getTrackPublications_find, _participant_getTrackPublications_find1;
        const state = getParticipantState(participant.identity);
        // 更新音频状态
        const audioTrack = (_participant_getTrackPublications_find = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Audio)) === null || _participant_getTrackPublications_find === void 0 ? void 0 : _participant_getTrackPublications_find.track;
        // 更新视频状态
        const videoTrack = (_participant_getTrackPublications_find1 = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Video)) === null || _participant_getTrackPublications_find1 === void 0 ? void 0 : _participant_getTrackPublications_find1.track;
        updateParticipantState(participant.identity, {
            ...state,
            isAudioEnabled: audioTrack ? !audioTrack.isMuted : false,
            isVideoEnabled: videoTrack ? !videoTrack.isMuted : false
        });
    }, [
        getParticipantState,
        updateParticipantState
    ]);
    // 切换参与者的音频状态
    const handleToggleAudio = (0,react.useCallback)((participant)=>{
        const currentState = participantStates[participant.identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
        updateParticipantState(participant.identity, {
            ...currentState,
            isAudioEnabled: !currentState.isAudioEnabled
        });
    }, [
        participantStates,
        updateParticipantState
    ]);
    // 切换参与者的视频状态
    const handleToggleVideo = (0,react.useCallback)((participant)=>{
        const currentState = participantStates[participant.identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
        updateParticipantState(participant.identity, {
            ...currentState,
            isVideoEnabled: !currentState.isVideoEnabled
        });
    }, [
        participantStates,
        updateParticipantState
    ]);
    // 获取参与者的实际媒体状态（考虑全局覆盖）
    const getEffectiveMediaState = (0,react.useCallback)((participantId)=>{
        const state = participantStates[participantId];
        if (!state) return {
            isAudioEnabled: true,
            isVideoEnabled: true
        };
        return {
            isAudioEnabled: globalMediaState.isAudioEnabled ? state.isAudioEnabled : false,
            isVideoEnabled: globalMediaState.isVideoEnabled ? state.isVideoEnabled : false
        };
    }, [
        globalMediaState,
        participantStates
    ]);
    // 参与者视频组件
    const ParticipantVideo = /*#__PURE__*/ react.memo((param)=>{
        let { participant, isLocal, isVideoEnabled } = param;
        const videoRef = (0,react.useRef)(null);
        const [videoTrack, setVideoTrack] = (0,react.useState)(null);
        // 处理视频轨道变化
        (0,react.useEffect)(()=>{
            if (!participant) return;
            // 查找现有的视频轨道发布
            const videoPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Video);
            // 如果轨道已存在，则直接设置
            if (videoPublication && videoPublication.track) {
                setVideoTrack(videoPublication.track);
            }
            // 当订阅轨道时处理
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                    setVideoTrack(track);
                }
            };
            // 当取消订阅轨道时处理
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                    setVideoTrack(null);
                }
            };
            // 添加事件监听
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            // 清理函数
            return ()=>{
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        // 处理视频元素附加/分离
        (0,react.useEffect)(()=>{
            const videoElement = videoRef.current;
            if (!videoElement || !videoTrack) return;
            // 清理现有视频源
            while(videoElement.firstChild){
                videoElement.removeChild(videoElement.firstChild);
            }
            // 附加视频轨道
            if (isVideoEnabled) {
                videoTrack.attach(videoElement);
            }
            return ()=>{
                if (videoTrack) {
                    videoTrack.detach(videoElement);
                }
            };
        }, [
            videoTrack,
            isVideoEnabled
        ]);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: '100%',
                aspectRatio: '16/9',
                bgcolor: 'grey.800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
                    ref: videoRef,
                    autoPlay: true,
                    playsInline: true,
                    muted: isLocal,
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: isVideoEnabled ? 'block' : 'none'
                    }
                }),
                !isVideoEnabled && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'grey.900'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontSize: 32,
                            fontWeight: 'bold'
                        },
                        children: participant.identity.charAt(0).toUpperCase()
                    })
                })
            ]
        });
    });
    // 参与者音频组件
    const ParticipantAudio = /*#__PURE__*/ react.memo((param)=>{
        let { participant, isMuted } = param;
        const audioRef = (0,react.useRef)(null);
        const [audioTrack, setAudioTrack] = (0,react.useState)(null);
        (0,react.useEffect)(()=>{
            if (!participant) return;
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                    setAudioTrack(track);
                }
            };
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                    setAudioTrack(null);
                }
            };
            // 查找现有的音频轨道
            const audioPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
            if (audioPublication && audioPublication.track) {
                setAudioTrack(audioPublication.track);
            }
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            return ()=>{
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        (0,react.useEffect)(()=>{
            const audioElement = audioRef.current;
            if (audioElement && audioTrack) {
                audioTrack.attach(audioElement);
                // 远程音频默认静音，除非用户手动取消
                audioElement.muted = isMuted;
                return ()=>{
                    audioTrack.detach(audioElement);
                };
            }
        }, [
            audioTrack,
            isMuted
        ]);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("audio", {
            ref: audioRef,
            autoPlay: true,
            playsInline: true
        });
    });
    // 渲染参与者
    const renderParticipant = (0,react.useCallback)((participant, isLocal)=>{
        const effectiveState = getEffectiveMediaState(participant.identity);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                boxShadow: 1
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipantVideo, {
                    participant: participant,
                    isLocal: isLocal,
                    isVideoEnabled: effectiveState.isVideoEnabled
                }),
                !isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipantAudio, {
                    participant: participant,
                    isMuted: !effectiveState.isAudioEnabled
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                    container: true,
                    sx: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 1,
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                        justifyContent: 'center',
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                color: effectiveState.isAudioEnabled ? 'primary' : 'error',
                                onClick: ()=>handleToggleAudio(participant),
                                children: effectiveState.isAudioEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeUp/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeOff/* default */.A, {})
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                color: effectiveState.isVideoEnabled ? 'primary' : 'error',
                                onClick: ()=>handleToggleVideo(participant),
                                children: effectiveState.isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Visibility/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VisibilityOff/* default */.A, {})
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "caption",
                                color: "white",
                                children: [
                                    participant.identity,
                                    " ",
                                    isLocal && '(你)'
                                ]
                            })
                        }),
                        isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                onClick: handleLocalMuteToggle,
                                color: isMuted ? 'error' : 'primary',
                                sx: {
                                    color: 'white'
                                },
                                title: isMuted ? '取消静音' : '静音',
                                children: isMuted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MicOff/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {})
                            })
                        }),
                        isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                onClick: handleLocalVideoToggle,
                                color: isVideoEnabled ? 'primary' : 'error',
                                sx: {
                                    color: 'white'
                                },
                                title: isVideoEnabled ? '关闭摄像头' : '开启摄像头',
                                children: isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOff/* default */.A, {})
                            })
                        })
                    ]
                })
            ]
        }, participant.identity);
    }, [
        isMuted,
        isVideoEnabled,
        getEffectiveMediaState,
        handleToggleAudio,
        handleToggleVideo,
        handleLocalMuteToggle,
        handleLocalVideoToggle
    ]);
    // 渲染控制按钮
    function renderControlButtons() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                gap: 1,
                p: 1,
                bgcolor: 'background.paper'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    color: isMuted ? 'error' : 'primary',
                    onClick: toggleMute,
                    title: isMuted ? '取消静音' : '静音',
                    children: isMuted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MicOff/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    color: isVideoEnabled ? 'primary' : 'error',
                    onClick: toggleVideo,
                    title: isVideoEnabled ? '关闭摄像头' : '开启摄像头',
                    children: isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOff/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    color: remoteMediaState.isAudioSubscribed ? 'primary' : 'error',
                    onClick: toggleRemoteAudio,
                    title: remoteMediaState.isAudioSubscribed ? '关闭所有远程音频' : '开启所有远程音频',
                    children: remoteMediaState.isAudioSubscribed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeUp/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeOff/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    color: remoteMediaState.isVideoSubscribed ? 'primary' : 'error',
                    onClick: toggleRemoteVideo,
                    title: remoteMediaState.isVideoSubscribed ? '关闭所有远程视频' : '开启所有远程视频',
                    children: remoteMediaState.isVideoSubscribed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Visibility/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VisibilityOff/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    color: "error",
                    onClick: leaveMeeting,
                    title: "离开会议",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CallEnd/* default */.A, {})
                })
            ]
        });
    }
    // 渲染主界面
    function renderMainContent() {
        // 如果已经连接，显示会议界面
        if (hasConnected && roomRef.current) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                className: className,
                sx: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            flex: 1,
                            overflow: 'auto',
                            p: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                                    item: true,
                                    xs: 12,
                                    md: participants.length === 0 ? 12 : 6,
                                    children: renderParticipant(roomRef.current.localParticipant, true)
                                }),
                                participants.map(function(participant) {
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: renderParticipant(participant, false)
                                    }, participant.identity);
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            p: 1,
                            borderTop: '1px solid',
                            borderColor: 'divider'
                        },
                        children: renderControlButtons()
                    })
                ]
            });
        }
        // 未连接时显示连接界面
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            className: className,
            sx: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    children: "准备加入会议"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    disabled: isConnecting,
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam/* default */.A, {}),
                    sx: {
                        mt: 2
                    },
                    children: [
                        "加入会议",
                        isConnecting && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 16,
                            sx: {
                                color: 'inherit',
                                ml: 1
                            }
                        })
                    ]
                })
            ]
        });
    }
    // 统一渲染内容，避免提前 return 导致 hooks 数量不一致
    let content;
    if (isConnecting) {
        content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    sx: {
                        mt: 2
                    },
                    children: "正在连接会议..."
                })
            ]
        });
    } else if (error) {
        content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
            severity: "error",
            sx: {
                m: 2
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    children: error
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {}),
                    sx: {
                        mt: 1
                    },
                    children: "重试连接"
                })
            ]
        });
    } else {
        content = renderMainContent();
    }
    (0,react.useEffect)(()=>{
        if (directly) {
            connectToRoom();
        }
    }, [
        directly
    ]);
    // 渲染组件
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        ref: ref,
        sx: sx,
        style: style,
        children: content
    });
}
// 使用 forwardRef 导出组件
const MeetingRoom5 = /*#__PURE__*/ (0,react.forwardRef)(MeetingRoomComponent);
MeetingRoom5.displayName = 'MeetingRoom5';


// EXTERNAL MODULE: ../../libs/im/matrix/src/index.ts + 371 modules
var src = __webpack_require__(91234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(67571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Autocomplete/Autocomplete.js + 5 modules
var Autocomplete = __webpack_require__(65555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 6 modules
var User = __webpack_require__(82080);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(89567);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/emc/inviteContacts.ts


/**
 * @description 调用邀请联系人接口的函数
 * @param opts 包含 params, gateway, handler 的请求选项
 */ async function tmsEmcInviteContacts(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcInviteContacts, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ../../libs/app/model/src/remote/emc/tmsEmcGetContactTypes.ts


/**
 * @description 调用获取联系人类型接口的函数
 * @param opts 包含 params, gateway, handler 的请求选项
 */ async function tmsEmcGetContactTypes(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcGetContactTypes, opts.params, opts.gateway, opts.handler);
    return res;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: ./src/services/authService.ts
var authService = __webpack_require__(92064);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
;// ./src/components/dialogs/InviteContactDialog.tsx








const fileLogger = new Log/* Log */.tG(false, 'InviteContactDialog.tsx');
const isValidIdentity = (text)=>/(^\d{11}$)|(^[a-zA-Z0-9]{32}$)/.test(text);
const is11DigitNumber = (text)=>/^\d{11}$/.test(text);
function InviteContactDialog(param) {
    let { open, onClose, onInviteSent } = param;
    var _matrixUser_userData_userInfo_loginResponse;
    const uiLogger = fileLogger.sub(false, 'InviteContactDialog_ui');
    const [contacts, setContacts] = (0,react.useState)('');
    const [remark, setRemark] = (0,react.useState)('');
    const [callType, setCallType] = (0,react.useState)(null);
    const [availableCallTypes, setAvailableCallTypes] = (0,react.useState)([]);
    // Debug effect to log availableCallTypes changes
    (0,react.useEffect)(()=>{
        console.log('availableCallTypes updated:', availableCallTypes);
    }, [
        availableCallTypes
    ]);
    // Debug effect to log callType changes
    (0,react.useEffect)(()=>{
        console.log('callType updated:', callType);
    }, [
        callType
    ]);
    const [message, setMessage] = (0,react.useState)('');
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [isTypesLoading, setIsTypesLoading] = (0,react.useState)(false);
    const [pendingParams, setPendingParams] = (0,react.useState)(null);
    const executionLock = (0,react.useRef)(false);
    const [accessToken] = (0,useProxyWatch/* useProxyWatch */.x)(src/* matrixUser */.xb.userData.userInfo, 'loginResponse.access_token', (_matrixUser_userData_userInfo_loginResponse = src/* matrixUser */.xb.userData.userInfo.loginResponse) === null || _matrixUser_userData_userInfo_loginResponse === void 0 ? void 0 : _matrixUser_userData_userInfo_loginResponse.access_token);
    const [isUserLoggedIn] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k.data.sessionData, 'global_user_info', !!User/* user */.k.data.sessionData.global_user_info);
    const [userToken] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    (0,react.useEffect)(()=>{
        if (accessToken && pendingParams && !executionLock.current) {
            executionLock.current = true;
            const finalParams = {
                ...pendingParams,
                matrix_access_token: accessToken,
                contacts: (pendingParams === null || pendingParams === void 0 ? void 0 : pendingParams.contacts) || [],
                type: (pendingParams === null || pendingParams === void 0 ? void 0 : pendingParams.type) || ''
            };
            executeApiCall(finalParams);
        }
    }, [
        accessToken,
        pendingParams
    ]);
    const executeApiCall = (0,react.useCallback)(async (params)=>{
        if (!params.contacts || !params.type) {
            dist/* default */.Ay.error('请填写联系人和呼叫类型');
            return;
        }
        setIsLoading(true);
        try {
            var _responseData_data;
            const res = await tmsEmcInviteContacts({
                params,
                handler: {
                    printLog: true
                }
            });
            console.log('Invite response:', res);
            // 处理响应结果
            if (res.err || !res.shellIsOk || !res.dataIsOk) {
                var _res_err;
                const errorMessage = ((_res_err = res.err) === null || _res_err === void 0 ? void 0 : _res_err.message) || '邀请失败，请稍后重试';
                dist/* default */.Ay.error(errorMessage);
                return;
            }
            // 处理嵌套的响应结构
            const responseData = res.data;
            if (!(responseData === null || responseData === void 0 ? void 0 : (_responseData_data = responseData.data) === null || _responseData_data === void 0 ? void 0 : _responseData_data.results)) {
                var _responseData_data1, _res_data;
                const errorMessage = (responseData === null || responseData === void 0 ? void 0 : (_responseData_data1 = responseData.data) === null || _responseData_data1 === void 0 ? void 0 : _responseData_data1.msg) || ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.msg) || '未返回有效的结果';
                dist/* default */.Ay.error(errorMessage);
                return;
            }
            const results = responseData.data.results;
            // 统计成功和失败的数量
            const successResults = results.filter((r)=>r.result_code === 'SUCCESS');
            const infoResults = results.filter((r)=>r.result_code === 'INVITE_ALREADY_SENT' || r.result_code === 'ALREADY_A_CONTACT');
            const errorResults = results.filter((r)=>r.result_code !== 'SUCCESS' && r.result_code !== 'INVITE_ALREADY_SENT' && r.result_code !== 'ALREADY_A_CONTACT');
            if (successResults.length > 0) {
                dist/* default */.Ay.success("成功邀请 ".concat(successResults.length, " 个联系人"));
                onInviteSent === null || onInviteSent === void 0 ? void 0 : onInviteSent();
            }
            if (infoResults.length > 0) {
                const infoMessages = infoResults.map((r)=>r.msg).filter(Boolean).join('\n');
                if (infoMessages) {
                    // 使用默认的 toast 替代 toast.info
                    (0,dist/* default */.Ay)(infoMessages);
                }
            }
            if (errorResults.length > 0) {
                const errorMessages = errorResults.map((r)=>r.msg).filter(Boolean).join('\n');
                if (errorMessages) {
                    dist/* default */.Ay.error("部分邀请失败：\n".concat(errorMessages));
                }
            }
        } catch (error) {
            console.error('Error in executeApiCall:', error);
            dist/* default */.Ay.error('处理请求时发生错误，请稍后重试');
        } finally{
            setIsLoading(false);
        }
    }, [
        onInviteSent
    ]);
    const fetchCallTypes = (0,react.useCallback)(async ()=>{
        const logger = uiLogger.sub(false, 'fetchCallTypes_fn');
        logger.log('Fetching call types...');
        setIsTypesLoading(true);
        const res = await tmsEmcGetContactTypes({
            params: {},
            handler: {
                printLog: true
            }
        });
        logger.log('Call types response:', JSON.stringify(res));
        setIsTypesLoading(false);
        if (res.err || !res.shellIsOk || !res.dataIsOk) {
            var _res_err;
            const errorMessage = ((_res_err = res.err) === null || _res_err === void 0 ? void 0 : _res_err.message) || '加载呼叫类型失败。';
            dist/* default */.Ay.error(errorMessage);
            setAvailableCallTypes([]);
            logger.error('Failed to load call types:', errorMessage);
        } else {
            var _res_data_data, _res_data;
            // 从 res.data.data.types 获取数据
            const types = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_data = _res_data.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.types) || [];
            logger.log('Setting availableCallTypes:', JSON.stringify(types));
            // 转换为 IEmcContactTypeItem[] 格式
            const formattedTypes = types.map((type)=>({
                    id: type.uuid,
                    name: type.name,
                    is_system: type.is_system
                }));
            setAvailableCallTypes(formattedTypes);
            // 只在 callType 为空时设置默认值
            if (formattedTypes.length > 0 && !callType) {
                const defaultType = formattedTypes[0].name;
                logger.log('Setting default call type:', defaultType);
                setCallType(defaultType);
            } else if (formattedTypes.length === 0) {
                logger.warn('No call types available');
            }
        }
    }, []); // 移除了 callType 依赖
    (0,react.useEffect)(()=>{
        if (open) {
            fetchCallTypes();
        } else {
            setContacts('');
            setRemark('');
            setCallType(null);
            setAvailableCallTypes([]);
            setMessage('');
            setIsLoading(false);
            setPendingParams(null);
            executionLock.current = false;
        }
    }, [
        open,
        fetchCallTypes
    ]);
    const handleSendInvitation = (0,react.useCallback)(async ()=>{
        var _matrixUser_userData_userInfo_loginResponse;
        const contactInputs = contacts.split('\n').map((c)=>c.trim()).filter((c)=>c);
        if (contactInputs.length === 0) {
            dist/* default */.Ay.error('请输入至少一个联系人。');
            return;
        }
        const contactIdentities = [];
        for (const input of contactInputs){
            if (isValidIdentity(input)) {
                const type = is11DigitNumber(input) ? 'mobile' : 'email';
                contactIdentities.push({
                    identity: input,
                    identityType: type
                });
            } else {
                dist/* default */.Ay.error("联系人格式无效: ".concat(input, "。必须是11位手机号或32位字符串。"));
                return;
            }
        }
        if (!callType || callType.trim() === '') {
            dist/* default */.Ay.error('请选择或输入一个呼叫类型。');
            return;
        }
        setIsLoading(true);
        if (!userToken) {
            const appLoggedIn = await authService/* authService */.y.showLoginDialog();
            if (!appLoggedIn) {
                setIsLoading(false);
                return;
            }
        }
        const currentAccessToken = (_matrixUser_userData_userInfo_loginResponse = src/* matrixUser */.xb.userData.userInfo.loginResponse) === null || _matrixUser_userData_userInfo_loginResponse === void 0 ? void 0 : _matrixUser_userData_userInfo_loginResponse.access_token;
        const params = {
            contacts: contactIdentities,
            type: callType.trim(),
            remark: remark.trim(),
            message: message.trim()
        };
        if (currentAccessToken) {
            executionLock.current = true;
            const apiParams = {
                ...params,
                matrix_access_token: currentAccessToken,
                contacts: params.contacts || [],
                type: params.type || ''
            };
            executeApiCall(apiParams);
        } else {
            (0,dist/* default */.Ay)('等待登录...');
            setPendingParams(params);
        }
    }, [
        contacts,
        remark,
        callType,
        message,
        executeApiCall,
        isUserLoggedIn
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: ()=>onClose(),
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: "邀请紧急联系人"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    component: "form",
                    sx: {
                        mt: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            autoFocus: true,
                            margin: "dense",
                            id: "contacts",
                            label: "联系人 (11位手机号或32位ID)",
                            type: "text",
                            fullWidth: true,
                            multiline: true,
                            rows: 4,
                            variant: "outlined",
                            placeholder: "13800138000 550e8400e29b41d4a716446655440000",
                            value: contacts,
                            onChange: (e)=>setContacts(e.target.value),
                            disabled: isLoading
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            margin: "dense",
                            id: "remark",
                            label: "备注名 (可选)",
                            type: "text",
                            fullWidth: true,
                            variant: "outlined",
                            value: remark,
                            onChange: (e)=>setRemark(e.target.value),
                            disabled: isLoading
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete/* default */.A, {
                            freeSolo: true,
                            id: "call-type-autocomplete",
                            options: availableCallTypes.map((option)=>option.name),
                            value: callType || '',
                            onChange: (event, newValue)=>{
                                console.log('Call type changed to:', newValue);
                                setCallType(newValue);
                            },
                            inputValue: callType || '',
                            onInputChange: (event, newInputValue, reason)=>{
                                // Only update when the user is typing, not when an option is selected
                                if (reason === 'input') {
                                    console.log('Input value changed to:', newInputValue);
                                    setCallType(newInputValue);
                                }
                            },
                            disablePortal: true,
                            disableClearable: true,
                            forcePopupIcon: !isTypesLoading,
                            sx: {
                                mt: 1,
                                mb: 1,
                                width: '100%'
                            },
                            renderInput: (params)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    ...params,
                                    label: "呼叫类型",
                                    variant: "outlined",
                                    fullWidth: true,
                                    InputProps: {
                                        ...params.InputProps,
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                isTypesLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                                    color: "inherit",
                                                    size: 20
                                                }) : null,
                                                params.InputProps.endAdornment
                                            ]
                                        })
                                    }
                                }),
                            ListboxProps: {
                                style: {
                                    maxHeight: '200px',
                                    overflow: 'auto'
                                }
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            margin: "dense",
                            id: "message",
                            label: "邀请信息 (可选)",
                            type: "text",
                            fullWidth: true,
                            multiline: true,
                            rows: 3,
                            variant: "outlined",
                            placeholder: "我已将您添加为我的紧急联系人，请接受邀请。",
                            value: message,
                            onChange: (e)=>setMessage(e.target.value),
                            disabled: isLoading
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: ()=>onClose(),
                        disabled: isLoading,
                        children: "关闭"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleSendInvitation,
                        variant: "contained",
                        disabled: isLoading,
                        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 24
                        }) : '发送邀请'
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 6 modules
var AutoWebViewJs = __webpack_require__(13774);
;// ./src/components/jpush/IsInitialized.tsx




function JpushIsInitialized() {
    const [isInitialized, setIsInitialized] = (0,react.useState)(false);
    function refresh() {
        const script = "var bl = com.fanfanlo.emergencycall.jpush.JpushManager.readIsJpushInitialized();\n        bl;";
        const { javaResultData } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        setIsInitialized(typeof javaResultData == "undefined" ? false : javaResultData);
    }
    (0,react.useEffect)(()=>{
        refresh();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: "消息推送初始:"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: isInitialized ? "是" : "否"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    onClick: refresh,
                    children: "刷新"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(9767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(90928);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/AccessTime.js
var AccessTime = __webpack_require__(63839);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Check.js
var Check = __webpack_require__(63324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Notifications.js
var Notifications = __webpack_require__(41264);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/formatDistanceToNow.js + 11 modules
var formatDistanceToNow = __webpack_require__(60952);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-CN.js + 6 modules
var zh_CN = __webpack_require__(65507);
;// ../../libs/app/model/src/remote/emergency-call/list_pending_received_invitations.ts


/**
 * 获取未处理的被邀请信息
 */ async function tmsEmergencyCallListPendingReceivedInvitations(opts) {
    return (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcListPendingReceivedInvitations, opts.params, opts.gateway, opts.handler);
}
// 导出服务
const emergencyCallPendingInvitationService = {
    listPendingReceivedInvitations: tmsEmergencyCallListPendingReceivedInvitations
};
/* harmony default export */ const list_pending_received_invitations = ((/* unused pure expression or super */ null && (emergencyCallPendingInvitationService)));

// EXTERNAL MODULE: ../../libs/app/model/src/remote/emergency-call/list_all_invitations.ts
var list_all_invitations = __webpack_require__(77391);
// EXTERNAL MODULE: ../../libs/app/model/src/mc/app/AppModel.ts
var AppModel = __webpack_require__(10877);
;// ./src/components/PendingInvitationsList/PendingInvitationsList.tsx








// 邀请卡片组件
function PendingInvitationCard(param) {
    let { invitation, onRespond, isProcessing = false } = param;
    var _invitation_user_info_display_name_, _invitation_user_info_display_name;
    const [isProcessingAction, setIsProcessingAction] = (0,react.useState)(false);
    const handleRespond = async (action)=>{
        if (!onRespond) return;
        try {
            setIsProcessingAction(true);
            await onRespond(action);
        } finally{
            setIsProcessingAction(false);
        }
    };
    const isExpired = new Date(invitation.expires_at * 1000) < new Date();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
        variant: "outlined",
        sx: {
            mb: 2,
            opacity: isProcessing ? 0.7 : 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                                src: invitation.user_info.avatar_url,
                                alt: invitation.user_info.display_name,
                                sx: {
                                    width: 50,
                                    height: 50,
                                    mr: 2
                                },
                                children: ((_invitation_user_info_display_name = invitation.user_info.display_name) === null || _invitation_user_info_display_name === void 0 ? void 0 : (_invitation_user_info_display_name_ = _invitation_user_info_display_name[0]) === null || _invitation_user_info_display_name_ === void 0 ? void 0 : _invitation_user_info_display_name_.toUpperCase()) || '?'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                flexGrow: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "h6",
                                        children: invitation.user_info.display_name || '未知用户'
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mt: 0.5
                                        },
                                        children: (0,formatDistanceToNow/* formatDistanceToNow */.m)(invitation.created_at * 1000, {
                                            addSuffix: true,
                                            locale: zh_CN/* zhCN */.g
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                textAlign: "right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                    size: "small",
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessTime/* default */.A, {
                                        fontSize: "small"
                                    }),
                                    label: isExpired ? '已过期' : "".concat((0,formatDistanceToNow/* formatDistanceToNow */.m)(invitation.expires_at * 1000, {
                                        addSuffix: true,
                                        locale: zh_CN/* zhCN */.g
                                    })),
                                    color: isExpired ? 'error' : 'primary',
                                    variant: "outlined"
                                })
                            })
                        ]
                    }),
                    invitation.message && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            mt: 1,
                            mb: 1
                        },
                        children: [
                            "邀请信息: ",
                            invitation.message
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "primary",
                        sx: {
                            fontWeight: 'medium'
                        },
                        children: "邀请您成为紧急联系人"
                    })
                ]
            }),
            !isExpired && /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.A, {
                sx: {
                    justifyContent: 'flex-end',
                    pt: 0
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        size: "small",
                        color: "error",
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {}),
                        onClick: ()=>handleRespond('decline'),
                        disabled: isProcessing || isProcessingAction,
                        children: "拒绝"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        size: "small",
                        color: "primary",
                        variant: "contained",
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.A, {}),
                        onClick: ()=>handleRespond('accept'),
                        disabled: isProcessing || isProcessingAction,
                        children: "接受"
                    })
                ]
            })
        ]
    });
}
const PendingInvitationsList = ()=>{
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [invitations, setInvitations] = (0,react.useState)([]);
    const [isProcessing, setIsProcessing] = (0,react.useState)(false);
    // 监听用户登录状态
    const [userToken] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    // 加载未处理的被邀请信息
    const loadPendingInvitations = (0,react.useCallback)(async ()=>{
        if (!userToken) {
            setInvitations([]);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            var _res_data;
            const res = await emergencyCallPendingInvitationService.listPendingReceivedInvitations({
                params: {}
            });
            if (res.shellIsOk && res.dataIsOk && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                setInvitations(res.data.invitations || []);
            } else {
                var _res_data1;
                setError(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '加载邀请列表失败');
            }
        } catch (err) {
            console.error('加载未处理邀请列表异常:', err);
            setError('发生未知错误');
        } finally{
            setIsLoading(false);
        }
    }, [
        userToken
    ]); // 现在可以安全地依赖userToken了
    // 响应邀请
    const handleRespondToInvite = (0,react.useCallback)(async (invitationId, action)=>{
        try {
            var _res_data;
            setIsProcessing(true);
            const res = await list_all_invitations/* emergencyCallInvitationService */._u.respondToInvite({
                params: {
                    invitation_id: invitationId,
                    action
                }
            });
            if (!res.shellIsOk || !res.dataIsOk || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                var _res_data1;
                throw new Error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '操作失败');
            }
            // 从列表中移除已处理的邀请
            setInvitations((prev)=>prev.filter((invite)=>invite.invitation_id !== invitationId));
            // 发送邀请列表更新事件
            AppModel/* appModel */.fj.dispatcher.emit(AppModel/* AppModelEvent */.Ts.InviteListUpdated);
        } catch (err) {
            console.error('处理邀请失败:', err);
            setError(err instanceof Error ? err.message : '操作失败，请重试');
        } finally{
            setIsProcessing(false);
        }
    }, []);
    // 监听用户登录状态变化
    (0,react.useEffect)(()=>{
        console.log('PendingInvitationsList - userToken changed:', userToken);
        if (userToken) {
            // 有登录用户了，刷新邀请列表
            loadPendingInvitations();
        } else {
            // 清空邀请信息列表
            setInvitations([]);
        }
    }, [
        userToken
    ]); // 只依赖userToken
    // 监听邀请列表更新事件
    (0,react.useEffect)(()=>{
        const unsubscribe = AppModel/* appModel */.fj.dispatcher.addListener(AppModel/* AppModelEvent */.Ts.InviteListUpdated, ()=>{
            console.log('AppModelEvent.InviteListUpdated - 刷新未处理邀请列表');
            loadPendingInvitations();
        });
        return unsubscribe;
    }, [
        loadPendingInvitations
    ]); // 依赖loadPendingInvitations函数
    // 如果没有登录用户，不显示任何内容
    if (!userToken) {
        return null;
    }
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            p: 2,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                children: error
            })
        });
    }
    if (invitations.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            textAlign: "center"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        p: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                alignItems: "center",
                mb: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Notifications/* default */.A, {
                        color: "primary",
                        sx: {
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "h6",
                        color: "primary",
                        children: [
                            "未处理的邀请 (",
                            invitations.length,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                spacing: 2,
                children: invitations.map((invitation)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PendingInvitationCard, {
                        invitation: invitation,
                        onRespond: (action)=>handleRespondToInvite(invitation.invitation_id, action),
                        isProcessing: isProcessing
                    }, invitation.invitation_id))
            })
        ]
    });
};
/* harmony default export */ const PendingInvitationsList_PendingInvitationsList = (PendingInvitationsList);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/FormControl.js + 2 modules
var FormControl = __webpack_require__(33302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(75090);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 13 modules
var Select = __webpack_require__(25109);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(36994);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 3 modules
var MenuItem = __webpack_require__(83816);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 3 modules
var Switch = __webpack_require__(44817);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(32499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(56575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/DragIndicator.js
var DragIndicator = __webpack_require__(9431);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Stop.js
var Stop = __webpack_require__(13972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/PlayArrow.js
var PlayArrow = __webpack_require__(22503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Delete.js
var Delete = __webpack_require__(50807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandLess.js
var ExpandLess = __webpack_require__(39089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Settings.js
var Settings = __webpack_require__(52089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/VolumeUp.js
var esm_VolumeUp = __webpack_require__(93803);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Vibration.js
var Vibration = __webpack_require__(23134);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(55047);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(22800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@19.1.0/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(34826);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
;// __barrel_optimize__?names=debounce!=!../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js


// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/store/store.ts
var store = __webpack_require__(5123);
;// ./src/components/pre-alarm-config2/index.tsx









const PRE_ALARM_CONFIG_KEY = 'PRE_ALARM_ACTIONS_CONFIG';
const defaultSoundResources = [
    {
        id: 'beep_short',
        name: '短提示音'
    },
    {
        id: 'siren_gentle',
        name: '缓和警报'
    },
    {
        id: 'alarm_clock',
        name: '闹钟'
    }
];
const SortableActionItem = (param)=>{
    let { action, isPlaying, onUpdate, onRemove, onPreview, onStopPreview } = param;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0,sortable_esm/* useSortable */.gl)({
        id: action.id
    });
    const style = {
        transform: utilities_esm/* CSS */.Ks.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1 : 'auto'
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
        ref: setNodeRef,
        style: style,
        elevation: isDragging ? 3 : 1,
        sx: {
            p: 2,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                ...attributes,
                ...listeners,
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'grab'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DragIndicator/* default */.A, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    flexGrow: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "subtitle2",
                            children: action.type === 'sound' ? '声音' : '震动'
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            size: "small",
                            type: "number",
                            label: "持续时间 (ms)",
                            value: action.duration,
                            onChange: (e)=>onUpdate(action.id, {
                                    duration: parseInt(e.target.value, 10) || 0
                                }),
                            sx: {
                                width: 120
                            }
                        }),
                        action.type === 'sound' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                            size: "small",
                            sx: {
                                minWidth: 120
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                                    children: "声音类型"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.A, {
                                    value: action.resourceId || '',
                                    label: "声音类型",
                                    onChange: (e)=>onUpdate(action.id, {
                                            resourceId: e.target.value
                                        }),
                                    startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                                        title: isPlaying ? "停止" : "试听",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                            size: "small",
                                            onClick: ()=>isPlaying ? onStopPreview() : onPreview(action.resourceId),
                                            sx: {
                                                mr: 1
                                            },
                                            children: isPlaying ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {
                                                fontSize: "small"
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayArrow/* default */.A, {
                                                fontSize: "small"
                                            })
                                        })
                                    }),
                                    children: defaultSoundResources.map((sound)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                            value: sound.id,
                                            children: sound.name
                                        }, sound.id))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                onClick: ()=>onRemove(action.id),
                size: "small",
                color: "error",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.A, {})
            })
        ]
    });
};
const PreAlarmConfig2 = ()=>{
    const [config, setConfig] = (0,react.useState)(null);
    const [expanded, setExpanded] = (0,react.useState)(false);
    const [playingSoundId, setPlayingSoundId] = (0,react.useState)(null);
    const debouncedWrite = (0,react.useCallback)((0,lodash.debounce)((newConfig)=>{
        store/* autoJsStoreUtils */.b.write(PRE_ALARM_CONFIG_KEY, newConfig);
    }, 500), []);
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN, {
        activationConstraint: {
            distance: 8
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* TouchSensor */.IG, {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* KeyboardSensor */.uN, {
        coordinateGetter: sortable_esm/* sortableKeyboardCoordinates */.JR
    }));
    react.useEffect(()=>{
        const loadConfig = async ()=>{
            const storedConfig = await store/* autoJsStoreUtils */.b.read(PRE_ALARM_CONFIG_KEY);
            if (storedConfig) {
                const actionsWithIds = storedConfig.actions.map((action)=>({
                        ...action,
                        id: action.id || "action-".concat(Math.random().toString(36).substr(2, 9))
                    }));
                setConfig({
                    ...storedConfig,
                    actions: actionsWithIds
                });
            } else {
                setConfig({
                    enabled: true,
                    actions: [],
                    maxWaitDuration: 30000
                });
            }
        };
        loadConfig();
    }, []);
    const updateConfig = (0,react.useCallback)((updates)=>{
        setConfig((prev)=>{
            if (!prev) return null;
            const newConfig = {
                ...prev,
                ...updates
            };
            debouncedWrite(newConfig);
            return newConfig;
        });
    }, [
        debouncedWrite
    ]);
    const handleToggleEnabled = (event)=>{
        updateConfig({
            enabled: event.target.checked
        });
    };
    const handleAddAction = (type)=>{
        const newAction = {
            id: "action-".concat(Date.now()),
            type,
            duration: 3000,
            ...type === 'sound' && {
                resourceId: defaultSoundResources[0].id
            }
        };
        updateConfig({
            actions: [
                ...(config === null || config === void 0 ? void 0 : config.actions) || [],
                newAction
            ]
        });
    };
    const handleUpdateAction = (id, updates)=>{
        if (!config) return;
        updateConfig({
            actions: config.actions.map((action)=>action.id === id ? {
                    ...action,
                    ...updates
                } : action)
        });
    };
    const handleRemoveAction = (id)=>{
        if (!config) return;
        updateConfig({
            actions: config.actions.filter((action)=>action.id !== id)
        });
    };
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        if (!config || !over || active.id === over.id) return;
        const oldIndex = config.actions.findIndex((a)=>a.id === active.id);
        const newIndex = config.actions.findIndex((a)=>a.id === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
            updateConfig({
                actions: (0,sortable_esm/* arrayMove */.be)(config.actions, oldIndex, newIndex)
            });
        }
    };
    const handlePreviewSound = (resourceId)=>{
        if (!resourceId) return;
        handleStopSound();
        if (window.SoundManager) {
            window.SoundManager.previewSound(resourceId);
            setPlayingSoundId(resourceId);
        } else {
            console.warn('SoundManager JavascriptInterface is not available.');
        }
    };
    const handleStopSound = ()=>{
        if (window.SoundManager) {
            window.SoundManager.stopPreview();
        }
        setPlayingSoundId(null);
    };
    if (!config) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: "加载中..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            mb: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                elevation: 1,
                sx: {
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "subtitle1",
                                children: "防误触报警设置"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                    checked: config.enabled,
                                    onChange: handleToggleEnabled,
                                    color: "primary"
                                }),
                                label: config.enabled ? '已启用' : '已禁用'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        size: "small",
                        startIcon: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* default */.A, {}),
                        onClick: ()=>setExpanded(!expanded),
                        children: expanded ? '收起设置' : '设置'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.A, {
                in: expanded,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                    elevation: 0,
                    sx: {
                        mt: 1,
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle2",
                                    gutterBottom: true,
                                    children: "最大等待时间 (毫秒)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    fullWidth: true,
                                    type: "number",
                                    value: config.maxWaitDuration,
                                    onChange: (e)=>updateConfig({
                                            maxWaitDuration: parseInt(e.target.value, 10) || 0
                                        }),
                                    size: "small",
                                    InputProps: {
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "body2",
                                            sx: {
                                                ml: 1
                                            },
                                            children: "毫秒"
                                        })
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                            sx: {
                                my: 2
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    sx: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            children: [
                                                "报警动作 (",
                                                config.actions.length,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_VolumeUp/* default */.A, {}),
                                                    onClick: ()=>handleAddAction('sound'),
                                                    children: "添加声音"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Vibration/* default */.A, {}),
                                                    onClick: ()=>handleAddAction('vibration'),
                                                    children: "添加震动"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                config.actions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
                                    variant: "outlined",
                                    sx: {
                                        p: 3,
                                        textAlign: 'center',
                                        color: 'text.secondary'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        children: "暂无报警动作，请点击上方按钮添加"
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(core_esm/* DndContext */.Mp, {
                                    sensors: sensors,
                                    collisionDetection: core_esm/* closestCenter */.fp,
                                    onDragEnd: handleDragEnd,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sortable_esm/* SortableContext */.gB, {
                                        items: config.actions.map((a)=>a.id),
                                        strategy: sortable_esm/* verticalListSortingStrategy */._G,
                                        children: config.actions.map((action)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortableActionItem, {
                                                action: action,
                                                isPlaying: playingSoundId === action.resourceId,
                                                onUpdate: handleUpdateAction,
                                                onRemove: handleRemoveAction,
                                                onPreview: handlePreviewSound,
                                                onStopPreview: handleStopSound
                                            }, action.id))
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const pre_alarm_config2 = (PreAlarmConfig2);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Shortcut.js
var Shortcut = __webpack_require__(11550);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/MedicalServices.js
var MedicalServices = __webpack_require__(74963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Security.js
var Security = __webpack_require__(2950);
;// ./src/components/shortcut-config/ShortcutConfig.tsx





/**
 * 桌面快捷方式配置组件
 * 用于创建医疗呼救和安全呼救的桌面快捷方式
 */ const ShortcutConfig = ()=>{
    const [medicalName, setMedicalName] = (0,react.useState)('意外呼救');
    const [securityName, setSecurityName] = (0,react.useState)('安全呼救');
    const [isCreating, setIsCreating] = (0,react.useState)(false);
    const [message, setMessage] = (0,react.useState)(null);
    // 创建医疗呼救快捷方式
    const handleCreateMedicalShortcut = async ()=>{
        if (!medicalName.trim()) {
            setMessage({
                type: 'error',
                text: '请输入快捷方式名称'
            });
            return;
        }
        setIsCreating(true);
        setMessage(null);
        try {
            // 检查是否支持快捷方式
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            if (supportResult !== 'true') {
                setMessage({
                    type: 'error',
                    text: '当前设备不支持创建桌面快捷方式'
                });
                return;
            }
            // 创建医疗呼救快捷方式
            const script = 'com.fanfanlo.emergencycall.manager.ShortcutManager.createMedicalShortcut("'.concat(medicalName, '");');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (javaResultString === 'true') {
                setMessage({
                    type: 'success',
                    text: '医疗呼救快捷方式创建成功！请检查您的桌面。'
                });
            } else {
                setMessage({
                    type: 'error',
                    text: '快捷方式创建失败，请检查权限设置'
                });
            }
        } catch (error) {
            console.error('Error creating medical shortcut:', error);
            setMessage({
                type: 'error',
                text: '创建快捷方式时发生错误'
            });
        } finally{
            setIsCreating(false);
        }
    };
    // 创建安全呼救快捷方式
    const handleCreateSecurityShortcut = async ()=>{
        if (!securityName.trim()) {
            setMessage({
                type: 'error',
                text: '请输入快捷方式名称'
            });
            return;
        }
        setIsCreating(true);
        setMessage(null);
        try {
            // 检查是否支持快捷方式
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            if (supportResult !== 'true') {
                setMessage({
                    type: 'error',
                    text: '当前设备不支持创建桌面快捷方式'
                });
                return;
            }
            // 创建安全呼救快捷方式
            const script = 'com.fanfanlo.emergencycall.manager.ShortcutManager.createSecurityShortcut("'.concat(securityName, '");');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (javaResultString === 'true') {
                setMessage({
                    type: 'success',
                    text: '安全呼救快捷方式创建成功！请检查您的桌面。'
                });
            } else {
                setMessage({
                    type: 'error',
                    text: '快捷方式创建失败，请检查权限设置'
                });
            }
        } catch (error) {
            console.error('Error creating security shortcut:', error);
            setMessage({
                type: 'error',
                text: '创建快捷方式时发生错误'
            });
        } finally{
            setIsCreating(false);
        }
    };
    // 检查设备支持情况和权限引导
    const handleCheckSupport = async ()=>{
        try {
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const brandScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.getDeviceBrand();";
            const guideScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.getPermissionGuideText();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            const { javaResultString: brandResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(brandScript);
            const { javaResultString: guideResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(guideScript);
            const supportInfo = "设备支持情况：\n设备品牌: ".concat(brandResult, "\n快捷方式支持: ").concat(supportResult === 'true' ? '支持' : '不支持', "\n\n").concat(guideResult);
            setMessage({
                type: 'info',
                text: supportInfo
            });
        } catch (error) {
            console.error('Error checking support:', error);
            setMessage({
                type: 'error',
                text: '检查设备支持情况时发生错误'
            });
        }
    };
    // 检查并请求权限
    const handleRequestPermission = async ()=>{
        try {
            console.log('开始调用权限引导方法...');
            // 先测试基础方法是否工作
            const brandScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.getDeviceBrand();";
            const brandResult = AutoWebViewJs/* autoWebViewJs */.yx.callScript(brandScript);
            console.log('设备品牌测试:', brandResult);
            if (!brandResult || brandResult.javaResultString === undefined) {
                throw new Error('基础方法调用失败，可能需要重新编译应用');
            }
            // 尝试新的权限引导方法
            const script = "com.fanfanlo.emergencycall.manager.ShortcutManager.checkAndRequestPermissionWithResult();";
            const { javaResultString: result } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log('权限引导结果:', result);
            if (result && result !== 'undefined') {
                setMessage({
                    type: result.startsWith('✅') ? 'success' : result.startsWith('❌') ? 'error' : 'info',
                    text: result
                });
            } else {
                throw new Error('新方法返回undefined，使用兜底方案');
            }
        } catch (error) {
            console.error('权限引导调用出错:', error);
            console.log('尝试使用兜底方案...');
            // 兜底方案：使用旧方法 + 手动指引
            try {
                const fallbackScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.checkAndRequestShortcutPermission();";
                const fallbackResult = AutoWebViewJs/* autoWebViewJs */.yx.callScript(fallbackScript);
                const brand = AutoWebViewJs/* autoWebViewJs */.yx.callScript("com.fanfanlo.emergencycall.manager.ShortcutManager.getDeviceBrand();");
                const brandName = (brand === null || brand === void 0 ? void 0 : brand.javaResultString) || 'UNKNOWN';
                let guideText = '';
                if (brandName === 'XIAOMI' || brandName === 'REDMI') {
                    guideText = '\n\n小米/Redmi设备权限设置：\n1. 打开"设置" > "应用设置" > "应用管理"\n2. 找到"紧急呼救"应用\n3. 点击"权限管理" > "其他权限"\n4. 开启"创建桌面快捷方式"权限';
                } else {
                    guideText = '\n\n请手动前往：\n设置 > 应用管理 > 紧急呼救 > 权限管理\n开启"创建桌面快捷方式"权限';
                }
                setMessage({
                    type: 'warning',
                    text: "⚠️ 权限引导方法可能需要重新编译应用\n\n临时解决方案：".concat(guideText, "\n\n\uD83D\uDCA1 设置完成后，请返回重新创建快捷方式")
                });
            } catch (fallbackError) {
                console.error('兜底方案也失败:', fallbackError);
                setMessage({
                    type: 'error',
                    text: '❌ 权限方法调用失败\n\n可能原因：应用需要重新编译\n\n临时解决方案：\n1. 手动前往：设置 > 应用管理 > 紧急呼救\n2. 开启"创建桌面快捷方式"权限\n3. 返回重新创建快捷方式'
                });
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            p: 3
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
            elevation: 2,
            sx: {
                p: 3,
                mb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Shortcut/* default */.A, {
                            sx: {
                                mr: 2,
                                color: 'primary.main'
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "h5",
                            component: "h1",
                            children: "桌面快捷方式设置"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                        mb: 3
                    },
                    children: "创建桌面快捷方式，可以快速触发紧急呼救功能"
                }),
                message && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                    severity: message.type,
                    sx: {
                        mb: 3
                    },
                    onClose: ()=>setMessage(null),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                        style: {
                            whiteSpace: 'pre-wrap',
                            margin: 0
                        },
                        children: message.text
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                                variant: "outlined",
                                sx: {
                                    p: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MedicalServices/* default */.A, {
                                                sx: {
                                                    mr: 2,
                                                    color: 'error.main'
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                children: "医疗呼救"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mb: 2
                                        },
                                        children: "创建医疗紧急呼救快捷方式，点击后直接触发医疗呼救功能"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        fullWidth: true,
                                        label: "快捷方式名称",
                                        value: medicalName,
                                        onChange: (e)=>setMedicalName(e.target.value),
                                        sx: {
                                            mb: 2
                                        },
                                        placeholder: "意外呼救"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        fullWidth: true,
                                        variant: "contained",
                                        color: "error",
                                        onClick: handleCreateMedicalShortcut,
                                        disabled: isCreating,
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MedicalServices/* default */.A, {}),
                                        children: isCreating ? '创建中...' : '创建医疗呼救快捷方式'
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                                variant: "outlined",
                                sx: {
                                    p: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {
                                                sx: {
                                                    mr: 2,
                                                    color: 'warning.main'
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                children: "安全呼救"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mb: 2
                                        },
                                        children: "创建安全呼救快捷方式（功能开发中，点击显示占位界面）"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        fullWidth: true,
                                        label: "快捷方式名称",
                                        value: securityName,
                                        onChange: (e)=>setSecurityName(e.target.value),
                                        sx: {
                                            mb: 2
                                        },
                                        placeholder: "安全呼救"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        fullWidth: true,
                                        variant: "contained",
                                        color: "warning",
                                        onClick: handleCreateSecurityShortcut,
                                        disabled: isCreating,
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {}),
                                        children: isCreating ? '创建中...' : '创建安全呼救快捷方式'
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                    sx: {
                        my: 3
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "outlined",
                            onClick: handleCheckSupport,
                            disabled: isCreating,
                            children: "检查设备支持情况"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "outlined",
                            color: "primary",
                            onClick: handleRequestPermission,
                            disabled: isCreating,
                            children: "打开权限设置"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        mt: 3,
                        p: 2,
                        bgcolor: 'grey.50',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "subtitle2",
                            gutterBottom: true,
                            children: "使用说明："
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "body2",
                            component: "div",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                style: {
                                    margin: 0,
                                    paddingLeft: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "创建快捷方式后，请在桌面查看"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "医疗呼救快捷方式会直接触发紧急呼救"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "安全呼救功能正在开发中，明天会完善"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "支持自定义快捷方式名称"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                children: "重要："
                                            }),
                                            "小米、华为、OPPO、VIVO等设备需要手动开启权限"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "如果创建失败，请点击“打开权限设置”按钮"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            sx: {
                                mt: 2,
                                p: 1.5,
                                bgcolor: 'warning.light',
                                borderRadius: 1,
                                border: '1px solid',
                                borderColor: 'warning.main'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                color: "warning.dark",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "ℹ️ 温馨提示："
                                    }),
                                    "如果创建快捷方式时显示“没有权限”错误，请点击上方“打开权限设置”按钮， 系统会自动跳转到对应的权限设置页面。"
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const shortcut_config_ShortcutConfig = (ShortcutConfig);

// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
;// ./src/components/privacies/PrivacyDialog.tsx




// Add a React import for useRef


function PrivacyDialog(param) {
    let { type, area } = param;
    const url = "/privacies/".concat(type, "/").concat(area, ".html");
    const [iframeSrc, setIframeSrc] = (0,react.useState)(url);
    const [open, setOpen] = (0,react.useState)(false);
    function onClose() {
        setOpen(false);
    }
    (0,react.useEffect)(()=>{
        setIframeSrc("/privacies/".concat(type, "/").concat(area, ".html"));
    }, [
        type,
        area
    ]);
    (0,react.useEffect)(()=>{
        const def = {
            agree: false,
            disagreeTime: 0
        };
        const res = store/* autoJsStoreUtils */.b.read("privacy_".concat(type), def);
        const value = res && 'agree' in res ? res : def;
        if (!is_in_android/* isRealInAndroid */.nd) {
            return;
        }
        if (value.agree) {
            return;
        }
        if (value.disagreeTime && value.disagreeTime != 0 && value.disagreeTime + 3 * 24 * 60 * 60 * 1000 > Date.now()) {
            return;
        }
        setOpen(true);
    }, []);
    (0,react.useEffect)(()=>{
        const handleMessage = (event)=>{
            var _iframeRef_current;
            // Basic security check: ensure the message is from a trusted source if possible
            // For now, we check the data structure.
            if (event.source !== ((_iframeRef_current = iframeRef.current) === null || _iframeRef_current === void 0 ? void 0 : _iframeRef_current.contentWindow)) {
                return;
            }
            const { sender, agree } = event.data;
            if (sender === 'privacy_page') {
                console.log("Received privacy decision: ".concat(agree ? 'Agreed' : 'Disagreed'));
                const value = {
                    agree,
                    disagreeTime: agree ? 0 : Date.now()
                };
                store/* autoJsStoreUtils */.b.write("privacy_".concat(type), value);
                const s = "\n        var data = new com.fanfanlo.emergencycall.data.PrivacyData(".concat(value.agree, ", ").concat(value.disagreeTime, ");\n        com.fanfanlo.emergencycall.data.PrivacyStateHolder.updateMainPrivacyByJs(data);\n        ");
                AutoWebViewJs/* autoWebViewJs */.yx.callScript(s);
                // onResult(agree);
                onClose();
            }
        };
        window.addEventListener('message', handleMessage);
        return ()=>{
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    const iframeRef = react.useRef(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onClose,
        PaperProps: {
            sx: {
                width: '80%',
                height: '80%',
                maxWidth: 'none'
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                "aria-label": "close",
                onClick: onClose,
                sx: {
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme)=>theme.palette.grey[500]
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                sx: {
                    padding: 0,
                    overflow: 'hidden'
                },
                children: iframeSrc && /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                    ref: iframeRef,
                    src: iframeSrc,
                    style: {
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    },
                    title: "Privacy Policy - ".concat(type, "/").concat(area)
                })
            })
        ]
    });
}

;// ./src/components/privacies/ListenShowPrivacyContent.tsx




function ListenShowPrivacyContent(param) {
    let { type } = param;
    const [open, setOpen] = (0,react.useState)(false);
    function onClose() {
        setOpen(false);
    }
    (0,react.useEffect)(()=>{
        const value = store/* autoJsStoreUtils */.b.read("privacy_".concat(type), false);
        console.log('privacy value is', value, typeof value);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacyDialog, {
        type: type,
        area: "zh-cn"
    });
}

;// ./src/components/sensor-monitor/SensorMonitor.tsx




const SensorMonitor = ()=>{
    const [threshold, setThreshold] = (0,react.useState)('5.0');
    const [isMonitoring, setIsMonitoring] = (0,react.useState)(false);
    // Effect to fetch the initial monitoring state from Android
    (0,react.useEffect)(()=>{
        try {
            const script = "\n      var thresholdValue = com.fanfanlo.emergencycall.manager.SensorManager.getThreshold();\n      thresholdValue;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const thresholdValue = parseFloat(javaResultString || '5.0');
            console.log("script get threshold=", thresholdValue, javaResultString);
            setThreshold(thresholdValue.toString());
        } catch (error) {
            console.error('Error fetching initial threshold value:', error);
        }
    }, []);
    function readIsMonitoring() {
        try {
            const script = "\n      var isMonitoring = com.fanfanlo.emergencycall.manager.SensorManager.isMonitoring();\n      isMonitoring;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const isMonitoring = javaResultString === "true";
            console.log("script get isMonitoring=", isMonitoring, javaResultString);
            setIsMonitoring(isMonitoring);
        } catch (error) {
            console.error('Error fetching initial monitoring state:', error);
        }
    }
    (0,react.useEffect)(()=>{
        readIsMonitoring();
    }, []);
    const handleSetThreshold = ()=>{
        const thresholdValue = parseFloat(threshold);
        if (isNaN(thresholdValue)) {
            alert('请输入一个有效的数字作为阈值。');
            return;
        }
        try {
            // This script now ONLY updates the threshold.
            const script = "com.fanfanlo.emergencycall.manager.SensorManager.updateThreshold(".concat(thresholdValue, ");");
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            alert("阈值已设置为: ".concat(thresholdValue));
        } catch (error) {
            console.error('Error calling updateThreshold:', error);
            alert('设置阈值失败。请确保您在安卓应用中。');
        }
    };
    const handleToggleMonitoring = ()=>{
        try {
            if (isMonitoring) {
                const script = "com.fanfanlo.emergencycall.manager.SensorManager.stopMonitoring();";
                AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            } else {
                const script = "com.fanfanlo.emergencycall.manager.SensorManager.startMonitoring();";
                AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            }
            readIsMonitoring();
        } catch (error) {
            console.error('Error toggling monitoring:', error);
            alert('切换监控状态失败。请确保您在安卓应用中。');
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
        elevation: 3,
        sx: {
            padding: 2,
            margin: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                gutterBottom: true,
                children: "传感器监控控制"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    marginBottom: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        label: "震动阈值",
                        variant: "outlined",
                        type: "number",
                        value: threshold,
                        onChange: (e)=>setThreshold(e.target.value),
                        size: "small"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        onClick: handleSetThreshold,
                        children: "设置"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                color: isMonitoring ? 'error' : 'primary',
                onClick: handleToggleMonitoring,
                fullWidth: true,
                children: isMonitoring ? '停止监控' : '开始监控'
            })
        ]
    });
};
/* harmony default export */ const sensor_monitor_SensorMonitor = ((/* unused pure expression or super */ null && (SensorMonitor)));

;// ./src/components/test/TestEmergencyCall.tsx



function TestEmergencyCall() {
    function onClick() {
        const script = "\n        var instance = com.fanfanlo.emergencycall.service.SensorMonitoringService.instance;\n        if(instance){\n            instance.triggerEmergencyCall();\n        }\n        ";
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            mt: "10px",
            mb: "10px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            onClick: onClick,
            children: "呼救"
        })
    });
}

// EXTERNAL MODULE: ./src/libs/mc/main/MainModel.ts
var MainModel = __webpack_require__(28660);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/link.js
var next_link = __webpack_require__(97097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// ./src/pages/home/index.tsx

















function Content() {
    const [openInviteDialog, setOpenInviteDialog] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            my: 2,
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListenShowPrivacyContent, {
                type: "main"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PendingInvitationsList_PendingInvitationsList, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(pre_alarm_config2, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(JpushIsInitialized, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TestEmergencyCall, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                spacing: 2,
                sx: {
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        size: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "contained",
                            onClick: ()=>setOpenInviteDialog(true),
                            children: "邀请紧急联系人"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "/contacts",
                        style: {
                            textDecoration: 'none'
                        },
                        children: "联系人管理"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SensorMonitor, {}),
            openInviteDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(InviteContactDialog, {
                open: openInviteDialog,
                onClose: ()=>setOpenInviteDialog(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MeetingRoom5, {
                roomName: "test-room",
                userName: "user-".concat(Math.random().toString(36).substring(2, 8)),
                livekitConfig: MainModel/* mainModel */.N.appConfig.livekit
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shortcut_config_ShortcutConfig, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* IMOpenPageLink */.QF, {})
        ]
    });
}
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: 'emergency-call/pages/home/content',
                key: 'home.title'
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    });
}


/***/ }),

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50279);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30319);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52089);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76242);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(366);






function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)('emergency-call/components/navbar/content');
    const tabInfoList = [
        {
            label: t('NavBar.home'),
            value: '/',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {})
        },
        // { label: t('content.create'), value: '/script-creator', icon: <CreateIcon /> },
        // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
        {
            label: t('NavBar.settings'),
            value: '/settings',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-id": "tabbar-".concat(e.value),
                className: pathname === e.value ? 'Mui-selected' : '',
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}


/***/ }),

/***/ 43173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=initReactI18next!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(43734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js + 2 modules
var esm = __webpack_require__(50148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@24.2.3_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(94912);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/files-map-utils.ts
var files_map_utils = __webpack_require__(91850);
;// ../../libs/fanfanlo/src/i18n/i18n-init.ts
/* __next_internal_client_entry_do_not_use__ useTranslation,i18nLogger,i18n,i18nInit,default auto */ // 现在用的是这个文件








let fileDateVersion = '' // = getConfig().publicRuntimeConfig?.version
;
const i18nLogger = new Log/* Log */.tG(false, "i18n");
const windowHref = (()=>{
    var _window_parent;
    if (false) {}
    const u = new URL(window.location.href || ((_window_parent = window.parent) === null || _window_parent === void 0 ? void 0 : _window_parent.location.href));
    // 同域文本iframe里的页面会获取不到href，所以判断一下直接用父级的就行.
    return u.origin == null || u.origin == 'null' ? '' : u.origin;
})();
const backendOptions = {
    loadPath: function(lngs, namespaces) {
        const log = i18nLogger.sub(false, "i18n loadpath");
        log.pause = true;
        const lng = lngs[0];
        let p = "";
        // p = `/options/_locales/${lngs[0].replace("-", "_")}/messages.json`;
        // p = `/locales/zh-CN/ns1/content.json`;
        // p = `locales/${lng}/${namespaces[0]}.json?v=${fileDateVersion}`
        const ps = namespaces[0].split('/');
        ps.splice(ps.length - 1, 0, lng);
        // p = `locales/${ps.join('/')}.json?v=${fileDateVersion}`
        // p = `locales/${ps.join('/')}.json?v=${getBuildTime()}`
        p = "locales/".concat(ps.join('/'), ".json");
        log.log("lngs=", lngs);
        log.log("namespaces=", namespaces);
        log.log("p=", p);
        p = files_map_utils/* fileMapUtils */.E.getFile("/".concat(p));
        // console.log('map p=', p)
        p = "".concat(windowHref, "/").concat(p);
        return p;
    },
    parse: function(data, languages, namespaces) {
        const log = i18nLogger.sub(false, "i18n backend parse");
        log.pause = true;
        // log.log(`parrrse`, data, languages, namespaces);
        const l = JSON.parse(data);
        log.print("before set i18ndata");
        // i18nData = l as II18n;
        // log.log(`i18nData.rule.scripts.sys.rules`, i18nData.rule.scripts.sys.rules);
        log.log("parrrse", languages, namespaces);
        return l;
    }
};
const backend = new esm/* default */.A();
backend.init(null, backendOptions);
const i18n = i18next/* default */.Ay;
// export const resources: Resource = {
//   // 'zh-CN': {
//   //   translation: _.merge({}, zhCN),
//   // },
//   // en: {
//   //   translation: _.merge({}, en),
//   // },
// };
i18n.on("languageChanged", async function(lng) {
    const log = i18nLogger.sub(false, "onlanguageChanged");
    log.pause = true;
    log.log("lllllng", lng);
// lng = "en";
// const p = `/options/_locales/${lng.replace("-", "_")}/messages.json`;
});
function i18nInit() {
    let _fileDateVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    fileDateVersion = _fileDateVersion;
    i18n.use(i18nextBrowserLanguageDetector/* default */.A).use(backend).use(es/* initReactI18next */.r9).init({
        load: "currentOnly",
        // load: "all",
        // supportedLngs: ['zh-CN', 'zh-TW', 'en', 'en-GB', 'ja'],
        // resources,
        fallbackLng: env/* isServer */.S$ ? "en" : "zh-CN",
        // fallbackLng: "zh-CN",
        // lng: "zh-CN",
        partialBundledLanguages: true,
        ns: [],
        debug: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            caches: [
                "localStorage"
            ]
        }
    });
}
i18n.on("missingKey", function(lngs, namespace, key, res) {
    console.error("i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s", lngs, namespace, key, res);
});
i18n.on("loaded", function(loaded) {
    const log = i18nLogger.sub(false, "onloaded");
    log.pause = true;
    log.log("onloaded arguments", loaded);
});
i18n.on("failedLoading", function(lng, ns, msg) {
    const log = i18nLogger.sub(false, "onfailedLoading");
    log.pause = true;
    log.log("failedLoading arguments", lng, ns, msg);
});
i18n.on("added", function() {
    console.log('added', arguments);
});
/* harmony default export */ const i18n_init = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../libs/fanfanlo/src/storage/store-page-context.tsx


// import { storeUtils } from "./store";
const s = store_utils/* storeUtils */.P.namespace('store-page-context');
function create() {
    return /*#__PURE__*/ createContext(s);
}
const StorePageContext = /*#__PURE__*/ (0,react.createContext)(s);
const StorePageDynamicContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/config.js
var config = __webpack_require__(87891);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


;// ../../libs/app/ui/src/components/app/AppShell.tsx
/* __next_internal_client_entry_do_not_use__ AppShell auto */ 





checkReloadPage();
i18nInit();
function checkReloadPage() {
    if (false) {}
    if (config_default()().publicRuntimeConfig.isDevelopment) {
        return;
    }
    if (window.location.href.indexOf('qiniu') == -1) return;
    // 帮我检测url中是否包含_htmlRefreshTime的参数
    // 如果没有，则添加_htmlRefresTime的参数，值为当前时间的毫秒数
    const searchParams = new URL(window.location.href).searchParams;
    const htmlRefreshTime = searchParams.get('_htmlRefreshTime');
    if (!htmlRefreshTime) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
        return;
    }
    const refreshTime = Number(htmlRefreshTime);
    if (refreshTime + 2 * 60 * 1000 < Date.now()) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
    }
}
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = 'scrollPositionInfo';
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const s = store_utils/* storeUtils */.P.namespace(dynamicKey);
    let o = s.read(dynamicKey);
    if (!o) {
        o = {};
        s.write(dynamicKey, o);
    }
    o = (0,proxyWatch/* toProxy */.I$)(o);
    (0,react.useEffect)(()=>{
        router.beforePopState((state)=>{
            s.clearAll();
            return true;
        });
    });
    (0,react.useEffect)(()=>{
        s.write(dynamicKey, o);
        return (0,watchUpdates/* watchUpdates */.c)(o, ()=>{
            s.write(dynamicKey, o);
        });
    }, []);
    (0,react.useEffect)(()=>{
        const info = s.read(scrollKey) || {
            x: 0,
            y: 0
        };
        // console.log('app shell scroll info info = ', info)
        if (info.x == 0 && info.y == 0) {
            listenScroll();
        } else {
            window.requestAnimationFrame(()=>{
                window.scrollTo(info.x, info.y);
                listenScroll();
            });
        }
        function onScroll(e) {
            // console.log('app shell on scroll', { x: window.scrollX, y: window.scrollY })
            s.write(scrollKey, {
                x: window.scrollX,
                y: window.scrollY
            });
        }
        function listenScroll() {
            window.addEventListener('scroll', onScroll);
        }
        function unsub() {
            window.removeEventListener('scroll', onScroll);
        }
        return unsub;
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(StorePageContext, {
        value: s,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StorePageDynamicContext, {
            value: o,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: i18n,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 67236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// ../../libs/app/ui/src/components/page/PageContent.tsx





function Reload() {
    if (!env/* isDev */.Cu) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "  "
    });
    const { t } = (0,es/* useTranslation */.Bd)("app-ui/components/page/content");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>{
                    window.location.reload();
                },
                children: t("PageContent.refresh")
            }),
            new Date().toLocaleString()
        ]
    });
}
const ScrollP = /*#__PURE__*/ (0,react.createContext)({
    x: 0,
    y: 0
});
let index = 0;
function PageContent(param) {
    let { children, titleConf, reload } = param;
    index++;
    const scroll = (0,react.useContext)(ScrollP);
    const clazz = "".concat(Date.now() + Math.random() * Date.now());
    (0,react.useEffect)(()=>{
        async function loadTitle() {
            if (!titleConf) return;
            let title = titleConf.title;
            if (titleConf.ns) {
                title = await (0,i18n_value_loader/* loadI18nValue */.y)(titleConf.ns, titleConf.key || "content.title");
            }
            if (!title) return;
            document.title = title;
        }
        loadTitle();
    }, []);
    (0,react.useEffect)(()=>{
        const container = document.getElementsByClassName(clazz)[0];
        if (!container) return;
        container.scrollTop = scroll.y;
        const onScroll = ()=>{
            var scrollTop = container.scrollTop;
            scroll.y = scrollTop;
        };
        container.removeEventListener('scroll', onScroll);
        container.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>container.removeEventListener('scroll', onScroll);
    }, [
        clazz,
        scroll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
        className: clazz,
        sx: {
            flexGrow: 1,
            overflow: 'auto',
            padding: "0px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                (reload || reload == undefined) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Reload, {}),
                children
            ]
        })
    });
}

;// ../../libs/app/ui/src/components/page/AndroidPageContent.tsx


function AndroidPageContent(param) {
    let { children, titleConf, reload } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageContent, {
        titleConf: titleConf,
        reload: reload,
        children: children
    });
}


/***/ }),

/***/ 77391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _u: () => (/* binding */ emergencyCallInvitationService),
/* harmony export */   vt: () => (/* binding */ cancelOrRemoveInvitation)
/* harmony export */ });
/* unused harmony exports tmsEmergencyCallListAllInvitations, tmsEmergencyCallRespondToInvite */
/* harmony import */ var _tms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2413);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89567);


/**
 * 获取所有邀请（发送和接收的）
 */ async function tmsEmergencyCallListAllInvitations(opts) {
    return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Em)(_tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.TEmc, _tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.MEmcListAllInvitations, opts.params, opts.gateway, opts.handler);
}
/**
 * 取消或删除邀请
 * @param invitationId 邀请ID
 * @param isReceived 是否是接收的邀请
 * @returns Promise
 */ async function cancelOrRemoveInvitation(invitationId, isReceived) {
    const action = isReceived ? 'remove' : 'cancel';
    return emergencyCallInvitationService.respondToInvite({
        params: {
            invitation_id: invitationId,
            action
        }
    });
}
/**
 * 响应邀请
 */ async function tmsEmergencyCallRespondToInvite(opts) {
    return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Em)(_tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.TEmc, _tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.MEmcRespondToInvite, opts.params, opts.gateway, opts.handler);
}
// 导出所有接口
const emergencyCallInvitationService = {
    listAllInvitations: tmsEmergencyCallListAllInvitations,
    respondToInvite: tmsEmergencyCallRespondToInvite
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (emergencyCallInvitationService)));


/***/ }),

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59864);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32055);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9220);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67236);
/* __next_internal_client_entry_do_not_use__ TabbarContainer auto */ 



// interface TabInfoType {
//   label: string;
//   value: string;
//   icon: React.ReactNode;
// }
function BottomBar(param) {
    let { navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "bottom-navigation",
        sx: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: navBar
    });
}
// function NavBar() {
//   const router = useRouter();
//   const { pathname } = router;
//   const { t } = useTranslation('app-ui/components/tabbar/content');
//   const tabInfoList: TabInfoType[] = [
//     { label: t('content.home'), value: '/', icon: <HomeIcon /> },
//     // { label: t('content.create'), value: '/script-creator', icon: <CreateIcon /> },
//     // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
//     { label: t('content.settings'), value: '/settings', icon: <SettingsIcon /> },
//   ];
//   return (
//     <BottomNavigation showLabels value={pathname}>
//       {tabInfoList.map(e => (
//         <BottomNavigationAction
//           key={e.value}
//           label={e.label}
//           icon={e.icon}
//           data-id={`tabbar-${e.value}`}
//           className={pathname === e.value ? 'Mui-selected' : ''}
//           onClick={() => {
//             if (pathname === e.value) return;
//             router.push(e.value);
//           }}
//         />
//       ))}
//     </BottomNavigation>
//   );
// }
// testWatchUpdates()
function TabbarContainer(param) {
    let { children, titleConf, navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            height2: '100vh'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                direction: "column",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        titleConf: titleConf,
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {
                        navBar: navBar
                    })
                ]
            })
        ]
    });
}


/***/ })

}]);
//# sourceMappingURL=632-8653059ad21b6d3f.js.map