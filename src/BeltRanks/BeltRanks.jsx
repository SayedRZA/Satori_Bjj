import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styles from './BeltRanks.module.css';

export default function BeltRanks({ onClose }) {
    const events = [
        { status: 'White Belt', date: 'Beginner Level', icon: 'pi pi-circle-fill', color: '#d9d9d9' },
        { status: 'Blue Belt', date: 'Fundamentals & Defense', icon: 'pi pi-circle-fill', color: '#3b82f6' },
        { status: 'Purple Belt', date: 'Advanced Understanding', icon: 'pi pi-circle-fill', color: '#9333ea' },
        { status: 'Brown Belt', date: 'High-Level Control', icon: 'pi pi-circle-fill', color: '#8b5e3c' },
        { status: 'Black Belt', date: 'Mastery & Leadership', icon: 'pi pi-circle-fill', color: '#111827' }
    ];

    const customizedMarker = (item) => {
        return (
            <span
                className={styles.beltRanks__marker}
                style={{ backgroundColor: item.color }}
            >
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card
                title={item.status}
                subTitle={item.date}
                className={styles.beltRanks__card}
            >
                <p className={styles.beltRanks__text}>
                    This rank represents a stage of progress in Brazilian Jiu Jitsu.
                    Students continue developing technique, discipline, and mat awareness as they advance.
                </p>
                <Button label="Read more" className="p-button-text" />
            </Card>
        );
    };

    return (
        <div className={styles.beltRanks}>
            <div className={styles.beltRanks__overlay} onClick={onClose}>
                <div className={styles.beltRanks__modal}>
                    <div className={styles.beltRanks__header}>
                        <h2 className={styles.beltRanks__title}>Belt Rank Journey</h2>
                        <button
                            className={styles.beltRanks__closeButton}
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    </div>

                    <div className={styles.beltRanks__body}>
                        <Timeline
                            value={events}
                            align="alternate"
                            className={styles.beltRanks__timeline}
                            marker={customizedMarker}
                            content={customizedContent}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}