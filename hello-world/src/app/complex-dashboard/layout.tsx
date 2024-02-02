export default function DashboardLayout({ children, users, notifications, revenue }: {
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    users: React.ReactNode,
}) {
    return <div>
        <div>{children}</div>
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <div>{notifications}</div>
            </div>
        </div>
        <h1>Layout</h1>
    </div>
}