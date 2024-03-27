import java.util.*;

public class water {
    // Define a Pair class to represent a state of the two jugs
    static class Pair {
        int p1, p2;
        List<Pair> path;

        public Pair(int p1, int p2) {
            this.p1 = p1;
            this.p2 = p2;
            this.path = new ArrayList<>();
        }

        @Override
        public String toString() {
            return "(" + p1 + ", " + p2 + ")";
        }

        @Override
        public boolean equals(Object o) {
            if (this == o)
                return true;
            if (o == null || getClass() != o.getClass())
                return false;
            Pair pair = (Pair) o;
            return p1 == pair.p1 && p2 == pair.p2;
        }

        @Override
        public int hashCode() {
            return Objects.hash(p1, p2);
        }
    }

    public static void main(String[] args) throws java.lang.Exception {
        // Define the capacity of the two jugs and the target amount
        int Jug1 = 4;
        int Jug2 = 3;
        int target = 2;

        // Call the function to find the path to reach the target amount
        getPathIfPossible(Jug1, Jug2, target);
    }

    public static void getPathIfPossible(int Jug1, int Jug2, int target) {
        // Initialize the visited array and the queue for BFS
        boolean[][] visited = new boolean[Jug1 + 1][Jug2 + 1];
        Queue<Pair> queue = new LinkedList<>();
        Set<Pair> inQueue = new HashSet<>();
        Queue<Pair> closed = new LinkedList<>();
        Pair initialState = new Pair(0, 0);
        initialState.path.add(new Pair(0, 0));
        queue.offer(initialState);
        inQueue.add(initialState);

        // Print the header for the output
        System.out.format("%-5s %-15s %-50s %-33s %-50s%n", "Step ", "Current Point", "Adjacent Points", "OPEN",
                "CLOSED");
        int i = 1;
        while (!queue.isEmpty()) {
            // Dequeue a state from the queue
            Pair curr = queue.poll();
            inQueue.remove(curr);

            // Skip this state if it is invalid or has been visited
            if (curr.p1 > Jug1 || curr.p2 > Jug2 || visited[curr.p1][curr.p2])
                continue;
            visited[curr.p1][curr.p2] = true;
            closed.offer(curr);
            // If this state meets the target, print the path and return
            if (curr.p1 == target || curr.p2 == target) {
                System.out.println("Path: " + curr.path);
                return;
            }

            // Generate all possible next states
            List<Pair> nextStates = generateNextStates(curr, Jug1, Jug2, visited);
            // Add next states to the queue
            for (Pair nextState : nextStates) {
                if (!visited[nextState.p1][nextState.p2] && !inQueue.contains(nextState)) {
                    nextState.path = new ArrayList<>(curr.path);
                    nextState.path.add(nextState);
                    queue.offer(nextState);
                    inQueue.add(nextState);
                }
            }

            // Print Current Point, Adjacent Points, OPEN and CLOSED states
            System.out.format("%-5s %-15s %-50s %-33s %-50s%n", i, curr, nextStates, queue, closed);

            i++;
        }
    }

    private static List<Pair> generateNextStates(Pair curr, int Jug1, int Jug2, boolean[][] visited) {
        // Initialize the list of next states
        List<Pair> nextStates = new ArrayList<>();

        // Add the states obtained by filling each jug
        nextStates.add(new Pair(Jug1, curr.p2));
        nextStates.add(new Pair(curr.p1, Jug2));
        // Add the states obtained by emptying each jug
        nextStates.add(new Pair(0, curr.p2));
        nextStates.add(new Pair(curr.p1, 0));

        // Add the states obtained by pouring water from one jug to the other
        int p1 = Math.max(0, curr.p1 - (Jug2 - curr.p2));
        int p2 = Math.min(Jug2, curr.p1 + curr.p2);
        nextStates.add(new Pair(p1, p2));

        p1 = Math.min(Jug1, curr.p1 + curr.p2);
        p2 = Math.max(0, curr.p2 - (Jug1 - curr.p1));
        nextStates.add(new Pair(p1, p2));

        return nextStates;
    }
}